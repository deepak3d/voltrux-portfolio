---
title: Test Drive Form Component
description: A full-stack component for user lead generation.
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

The Test Drive Form is a full-stack AEM component that captures user information for scheduling a test drive. It demonstrates the interplay between a front-end HTL component and a back-end Sling Servlet for data persistence.

### Key Features

- **Custom Sling Servlet**: A dedicated servlet listens for `POST` requests at a specific resource type, securely handling form data submission.
- **Client-Side Validation**: The front-end form includes lightweight JavaScript for immediate user feedback on data entry.
- **Authorable Dialog**: Content authors can configure form field labels, placeholder text, and the thank you message directly from the AEM authoring interface.

### Code Implementation

Below are simplified snippets illustrating the core logic of the servlet and the HTL markup.

<Tabs>
<TabItem label="Java (Sling Servlet)">
```java
package com.voltrux.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.osgi.service.component.annotations.Component;
import javax.servlet.Servlet;
import java.io.IOException;

/**
 * Servlet that handles the submission of the Test Drive form.
 */
@Component(service = { Servlet.class })
@SlingServletResourceTypes(
    resourceTypes = "voltrux/components/test-drive",
    methods = "POST",
    selectors = "submit"
)
public class TestDriveServlet extends SlingAllMethodsServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(final SlingHttpServletRequest request, final SlingHttpServletResponse response) throws IOException {
        // In a real implementation:
        // 1. Get parameters from the request (e.g., firstName, lastName, email).
        // 2. Perform server-side validation.
        // 3. Use a service to save the lead data (e.g., to the JCR or an external CRM).
        // 4. Return a JSON response indicating success or failure.

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("{\"status\":\"success\", \"message\":\"Form submitted successfully.\"}");
    }
}
```
</TabItem>
<TabItem label="HTL (Component Markup)">
```html
<!--/* test-drive.html */-->
<div
    data-sly-use.model="com.voltrux.core.models.TestDriveModel"
    class="test-drive-form"
    id="test-drive-${resource.name}">

    <h2>${model.formTitle}</h2>
    <p>${model.formDescription}</p>

    <form method="POST" action="${resource.path}.submit.html">
        <div class="form-group">
            <label for="firstName">${model.firstNameLabel}</label>
            <input type="text" id="firstName" name="firstName" required>
        </div>
        <div class="form-group">
            <label for="lastName">${model.lastNameLabel}</label>
            <input type="text" id="lastName" name="lastName" required>
        </div>
        <div class="form-group">
            <label for="email">${model.emailLabel}</label>
            <input type="email" id="email" name="email" required>
        </div>

        <button type="submit">${model.submitButtonLabel}</button>
    </form>
    
    <!--/* 
      A real implementation would include a client library (clientlib)
      with JavaScript for AJAX submission and validation.
    */-->
</div>
```
</TabItem>
</Tabs>