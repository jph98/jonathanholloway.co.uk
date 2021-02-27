---
template: post
title: Eclipse Microprofile and Microservice Frameworks
date: 2020-04-06T10:56:37.497Z
excerpt: >-
  My first experience of Enterprise Java was in 2001, this was pre-J2EE, (let
  alone JEE) picking up a tutorial binder explaining Servlets…
thumb_img_path: >-
  images/Eclipse-Microprofile-and-Microservice-Frameworks/1*G8Z-RQYZDV5kYaC0YQbSFA.jpeg
---
My first experience of Enterprise Java was in 2001, this was pre-J2EE, (let alone JEE) picking up a tutorial binder explaining Servlets, JNDI, Enterprise Javabeans — when CORBA was used to generate the IDL’s, JMS. We didn’t really have a lot of guidance on it and it was pretty new at the time, but that said it was a big learning curve and it went ok. I went on to build several distributed systems on this technology over the next few years.

![](/images/Eclipse-Microprofile-and-Microservice-Frameworks/1*G8Z-RQYZDV5kYaC0YQbSFA.jpeg)

### Overview

15 years later Eclipse MicroProfile was launched in 2016, after Java and Enterprise Java had hit a bit of a wall in terms of advancing the technology. Eclipse MicroProfile is an attempt to repackage the essential API’s in order to build microservice style architectures. We’re going to have a brief rundown of each of these API’s, what they provide and an example.

The latest version of Eclipse MicroProfile, as of writing this is 3.1, utilising Java EE 8 which packages the following:

*   **JAX-RS** — For building simple REST endpoints;
*   **JSON-B** — For processing JSON documents via [newer style Java objects](https://cloud.ibm.com/docs/java?topic=java-mp-json);
*   **JSON-P** — For processing JSON documents (older style).
*   **Config** — retrieval of application configuration properties by [various means](https://github.com/eclipse/microprofile-config);
*   **Fault Tolerance** — [handling failure](https://github.com/eclipse/microprofile-fault-tolerance) (with downstream services, third party services) by using Circuit Breakers, Bulkheads etc…
*   **Health** — For [building](https://github.com/eclipse/microprofile-health) simple health checks into your services;
*   **Metrics** — For emitting performance metrics from your services (think [performance information](https://github.com/eclipse/microprofile-metrics/blob/master/spec/src/main/asciidoc/rest-endpoints.adoc) etc…)
*   **JWT Auth**— for building JSON web-token auth style flows into your services;
*   **OpenAPI**— for [exposing your service](https://github.com/eclipse/microprofile-open-api) RESTful API’s to the world for consumption — hurrah.
*   **OpenTracing** — distributed tracing for your services (a must if you're doing micro-services);
*   **REST Client** — Annotation driven REST endpoints, [example](https://github.com/eclipse/microprofile-rest-client).
*   **Context and Dependency Injection (CDI) —** Interceptors for cross-cutting concerns (auditing etc…) and observers for [event style management](https://www.baeldung.com/cdi-event-notification).
*   **Common Annotations** — [Annotations](https://en.wikipedia.org/wiki/JSR_250) for resources, lifecycle management.

You can download Eclipse MicroProfile from here:

[**Eclipse MicroProfile**  
*Many innovative "microservice" Enterprise Java environments and frameworks already exist in the Java ecosystem. These…*projects.eclipse.org](https://projects.eclipse.org/projects/technology.microprofile "https://projects.eclipse.org/projects/technology.microprofile")[](https://projects.eclipse.org/projects/technology.microprofile)

### Working Example

There’s a great overview here of an example of using MicroProfile to build microservices:

[**Asynchronous REST with JAX-RS and MicroProfile**  
*JAX-RS and MicroProfile Rest Client make writing and consuming RESTful services both easy and powerful, especially when…*openliberty.io](https://openliberty.io/blog/2019/01/24/async-rest-jaxrs-microprofile.html "https://openliberty.io/blog/2019/01/24/async-rest-jaxrs-microprofile.html")[](https://openliberty.io/blog/2019/01/24/async-rest-jaxrs-microprofile.html)

### Comparisons

Eclipse MicroProfile isn’t the only way to build microservices in Java. You have a few other options as well:

**The DropWizard Way** — The original service framework. Looked at it, abandoned it in favour of rolling our own with Apache CXF, mainly because it was already in-place in an application and getting DropWizard in would be too hard.

[**Home - Dropwizard**  
*Dropwizard has out-of-the-box support for sophisticated configuration, application metrics, logging, operational tools…*www.dropwizard.io](https://www.dropwizard.io/en/latest/ "https://www.dropwizard.io/en/latest/")[](https://www.dropwizard.io/en/latest/)

**The Spring Boot Way** — Using Spring Boot to build out your services. I used this a few years ago which was decent enough. We utilised some of the Netflix tech to provide fault tolerance features.

[**Spring Boot**  
*Level up your Java code and explore what Spring can do for you.*spring.io](https://spring.io/projects/spring-boot "https://spring.io/projects/spring-boot")[](https://spring.io/projects/spring-boot)

### Choosing

The choice of which microservice framework comes down to a number of factors for me (aside from building something to satisfy business requirements):

*   How **efficiently** I can develop with it, have the developers thought about eating their own dog food here : ) — how quickly can I download and get something up and running?
*   How **easily** the team can pick it up and work with it — the documentation and the tutorials (not just written by the core team either);
*   How **good the support is** when you run into issues with it and how they respond to your support requests;
*   How **frequently it’s updated** — I want to see active development on it.

Measure each of the above here on those merits and then make your choice.

### In Conclusion

I’m a consulting CTO working with various languages and technology, but also Java. You can find out more about me here:

[**HW Integral**  
*Interim/Fractional CTO Services, Technology Consulting, and Digital Design "We help growth stage startups with product…*www.hwintegral.com](https://www.hwintegral.com/ "https://www.hwintegral.com/")[](https://www.hwintegral.com/)
