# Java Google Maps Services


If you are looking for Java client libraries for the following APIs, see the [Google Maps Platform APIs in the Cloud Client Libraries for Java](https://github.com/googleapis/google-cloud-java/tree/main) ([releases](https://github.com/googleapis/google-cloud-java/releases?q=maps&expanded=true)).

- [Address Validation API](https://github.com/googleapis/google-cloud-java/tree/main/java-maps-addressvalidation)
- [Datasets API](https://github.com/googleapis/google-cloud-java/tree/main/java-maps-mapsplatformdatasets)
- [Places API (New)](https://github.com/googleapis/google-cloud-java/tree/main/java-maps-places)
- [Routes API](https://github.com/googleapis/google-cloud-java/tree/main/java-maps-routing)

The new APIs will not be added to this client library.

## Description

Use Java? Want to [geocode][Geocoding API] something? Looking for [directions][Directions API]?
Maybe [matrices of directions][Distance Matrix API]? This library brings the [Google Maps API Web
Services] to your server-side Java application.

The Java Client for Google Maps Services is a Java Client library for the following Google Maps
APIs:

- [Directions API][Directions API]
- [Distance Matrix API][Distance Matrix API]
- [Elevation API][Elevation API]
- [Geocoding API][Geocoding API]
- [Maps Static API][Maps Static API]
- [Places API][Places API]
- [Roads API][Roads API]
- [Time Zone API][Time Zone API]

## Requirements

- Java 1.8 or later
- A [Cloud project](https://developers.google.com/maps/get-started) with the relevant API(s) enabled
- An [API key](https://developers.google.com/maps/get-started) associated with the project above

### API Key Security

The Java Client for Google Maps Services is designed for use in both server and Android applications.
In either case, it is important to add [API key restrictions](https://developers.google.com/maps/api-security-best-practices?hl=it)
to improve the security of your API key. Additional security measures, such as hiding your key
from version control, should also be put in place to further improve the security of your API key.

You can refer to [API Security Best Practices](https://developers.google.com/maps/api-security-best-practices) to learn
more about this topic.

> [!NOTE]
> If you are using this library on Android, ensure that your application is using at least version 0.19.0 of this library so that API key restrictions can be enforced.

## Installation

You can add the library to your project via Maven or Gradle.

> [!NOTE]
> Since 0.1.18 there is now a dependency on [SLF4J](https://www.slf4j.org/). You need to add one of the adapter dependencies that makes sense for your logging setup. In the configuration samples below we are integrating [slf4j-nop](https://search.maven.org/#artifactdetails%7Corg.slf4j%7Cslf4j-nop%7C1.7.25%7Cjar), but there are others like [slf4j-log4j12](https://search.maven.org/#artifactdetails%7Corg.slf4j%7Cslf4j-log4j12%7C1.7.25%7Cjar) and [slf4j-jdk14](https://search.maven.org/#artifactdetails%7Corg.slf4j%7Cslf4j-jdk14%7C1.7.25%7Cjar) that will make more sense in other configurations. This will stop a warning message being emitted when you start using `google-maps-services`.

### Maven

```xml
<dependency>
  <groupId>com.google.maps</groupId>
  <artifactId>google-maps-services</artifactId>
  <version>(insert latest version)</version>
</dependency>
<dependency>
  <groupId>org.slf4j</groupId>
  <artifactId>slf4j-simple</artifactId>
  <version>1.7.25</version>
</dependency>
```

### Gradle

```groovy
repositories {
    mavenCentral()
}

dependencies {
    implementation 'com.google.maps:google-maps-services:(insert latest version)'
    implementation 'org.slf4j:slf4j-simple:1.7.25'
}
```

You can find the latest version at the top of this README or by [searching
Maven Central](https://search.maven.org/#search%7Cga%7C1%7Ca%3A%22google-maps-services%22).

## Documentation

View the [javadoc](https://www.javadoc.io/doc/com.google.maps/google-maps-services).

Additional documentation for the included web services is available at
[https://developers.google.com/maps/](https://developers.google.com/maps/).

- [Directions API][Directions API]
- [Distance Matrix API][Distance Matrix API]
- [Elevation API][Elevation API]
- [Geocoding API][Geocoding API]
- [Maps Static API][Maps Static API]
- [Places API][Places API]
- [Roads API][Roads API]
- [Time Zone API][Time Zone API]

## Usage

This example uses the [Geocoding API][Geocoding API] with an API key:

```java
GeoApiContext context = new GeoApiContext.Builder()
    .apiKey("AIza...")
    .build();
GeocodingResponse response =  GeocodingApi.geocode(context,
    "1600 Amphitheatre Parkway Mountain View, CA 94043").await();
Gson gson = new GsonBuilder().setPrettyPrinting().create();
System.out.println(gson.toJson(response.results[0].addressComponents));

// Invoke .shutdown() after your application is done making requests
context.shutdown();
```

**Note:** The `GeoApiContext` is designed to be a [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern)
in your application. Please instantiate one on application startup, and continue to use it for the
life of your application. This will enable proper QPS enforcement across all of your requests.

At the end of the execution, call the `shutdown()` method of `GeoApiContext`,
otherwise the thread will remain instantiated in memory.

For more usage examples, check out [the tests](src/test/java/com/google/maps).

## Features

### Google App Engine Support

To use Google App Engine with this client library add the latest [App Engine dependency](https://mvnrepository.com/artifact/com.google.appengine/appengine-api-1.0-sdk)
to your `build.gradle` file:

```groovy
dependencies {
    implementation 'com.google.appengine:appengine-api-1.0-sdk:<latest version>'
}
```

You can then use this client library on Google App Engine with the following code change:

```java
new GeoApiContext.Builder(new GaeRequestHandler.Builder())
    .apiKey("AIza...")
    .build();
```

The `new GaeRequestHandler.Builder()` argument to `GeoApiContext.Builder`'s `requestHandlerBuilder`
tells the Java Client for Google Maps Services to utilise the appropriate calls for making HTTP
requests from Google App Engine, instead of the default [OkHttp3](https://square.github.io/okhttp/)
based strategy.

### Rate Limiting

Never sleep between requests again! By default, requests are sent at the expected rate limits for
each web service, typically 50 queries per second for free users. If you want to speed up or slow
down requests, you can do that too, using `new GeoApiContext.Builder().queryRateLimit(qps).build()`.
Note that you still need to manually handle the [delay between the initial request and successive pages](https://developers.google.com/places/web-service/search#PlaceSearchPaging) when you're paging through multiple result sets.

### Retry on Failure

Automatically retry when intermittent failures occur. That is, when any of the retriable 5xx errors
are returned from the API.

To alter or disable automatic retries, see these methods in `GeoApiContext`:

- `.disableRetries()`
- `.maxRetries()`
- `.retryTimeout()`
- `.setIfExceptionIsAllowedToRetry()`

### POJOs

Native objects for each of the API responses.

### Asynchronous or synchronous -- you choose

All requests support synchronous or asynchronous calling style.

```java
GeocodingApiRequest req = GeocodingApi.newRequest(context).address("Sydney");

// Synchronous
try {
    req.await();
    // Handle successful request.
} catch (Exception e) {
    // Handle error
}

req.awaitIgnoreError(); // No checked exception.

// Async
req.setCallback(new PendingResult.Callback<GeocodingResponse>() {
  @Override
  public void onResult(GeocodingResponse result) {
    // Handle successful request.
  }

  @Override
  public void onFailure(Throwable e) {
    // Handle error.
  }
});
```

## Building the Project

> [!NOTE]
> You will need an API key to run the tests.

```bash
# Compile and package the project
$ ./gradlew jar

# Run the tests
$ ./gradlew test
```

## Terms

This library uses Google Maps Platform services. Use of Google Maps Platform services through this library is subject to the [Google Maps Platform Terms of Service](https://cloud.google.com/maps-platform/terms).

This library is not a Google Maps Platform Core Service. Therefore, the Google Maps Platform Terms of Service (e.g. Technical Support Services, Service Level Agreements, and Deprecation Policy) do not apply to the code in this library.

## Support

This library is offered via an open source license. It is not governed by the [Google Maps Platform Support Technical Support Services Guidelines](https://cloud.google.com/maps-platform/terms/tssg), the [SLA](https://cloud.google.com/maps-platform/terms/sla), or the [Deprecation Policy](https://cloud.google.com/maps-platform/terms) (however, any Google Maps Platform services used by the library remain subject to the Google Maps Platform Terms of Service).

This library adheres to [semantic versioning](https://semver.org/) to indicate when backwards-incompatible changes are introduced. Accordingly, while the library is in version 0.x, backwards-incompatible changes may be introduced at any time.

If you find a bug, or have a feature request, please file an [issue][issues] on GitHub. If you would like to get answers to technical questions from other Google Maps Platform developers, ask through one of our [developer community channels](https://developers.google.com/maps/developer-community). If you'd like to contribute, please check the [Contributing guide][contrib] in the GitHub repository.

[contrib]: https://github.com/googlemaps/google-maps-services-java/blob/main/CONTRIB.md
[Directions API]: https://developers.google.com/maps/documentation/directions
[Distance Matrix API]: https://developers.google.com/maps/documentation/distancematrix
[Elevation API]: https://developers.google.com/maps/documentation/elevation
[Geocoding API]: https://developers.google.com/maps/documentation/geocoding
[Google Maps API Web Services]: https://developers.google.com/maps/apis-by-platform#web_service_apis
[issues]: https://github.com/googlemaps/google-maps-services-java/issues
[Maps Static API]: https://developers.google.com/maps/documentation/maps-static/
[Places API]: https://developers.google.com/places/web-service/
[Time Zone API]: https://developers.google.com/maps/documentation/timezone
[Roads API]: https://developers.google.com/maps/documentation/roads
