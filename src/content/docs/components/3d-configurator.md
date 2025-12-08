---
title: 3D Truck Configurator
description: An interactive WebGL viewer for AEM.
---

The 3D Truck Configurator is a high-impact component that bridges the gap between traditional web content and immersive, interactive experiences. It provides an in-page WebGL canvas, powered by Three.js, that allows users to view and customize a 3D model of a Voltrux vehicle in real-time.

### Core Functionality

- **Model Viewer**: Renders a `*.glb` (binary GLTF) 3D model within the AEM component.
- **Author-Friendly**: A content author can easily swap out the 3D model by uploading a new `*.glb` file to the AEM DAM (Digital Asset Management) and referencing it from the component's dialog.
- **Interactive Controls**: The front-end application includes controls for rotating, panning, and zooming the model. Future iterations will include "hotspots" and part-selection for a full configuration experience.

### Technical Challenge: React in an HTL World

The primary technical challenge in building this component was integrating a modern, stateful React application (which manages the Three.js canvas and logic) into a traditional, server-side rendered AEM component.

The solution involves a "hybrid" approach:
1.  **AEM Component**: An HTL component is responsible for rendering the basic DOM structure and providing a root element (`<div id="react-root">`).
2.  **Sling Model**: A Sling Model delivers the path to the `*.glb` file from the DAM as a JSON object or data attribute.
3.  **React Application**: A self-contained React application is loaded via a client library (`clientlib`). It targets the root `div` and bootstraps itself, taking the model path as a property to initialize the Three.js scene.

This architecture effectively decouples the React front-end from the AEM back-end, allowing developers to work on the 3D experience with modern tools while still giving AEM authors full control over its placement and content.
