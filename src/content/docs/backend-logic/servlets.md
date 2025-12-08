---
title: Sling Servlets
---

The `core` module contains custom Sling Servlets to handle specific requests and business logic. They are located in the `com.voltrux.aem.core.servlets` package.

### Core Servlets

-   **SimpleServlet:** Bound to the resource type `voltrux/components/page`. This servlet can be used for general-purpose operations related to page resources.

-   **TestDriveServlet:** Available at the path `/bin/voltrux/testdrive`. This servlet is designed to handle submissions from the "Test Drive" form component.