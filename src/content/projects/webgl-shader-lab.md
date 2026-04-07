---
title: 'WebGL Shader Lab'
description: 'A live GLSL fragment shader editor that runs entirely in the browser — write, preview, and share shaders instantly'
link: 'https://bl0xsmith.github.io/shader-lab'
github: 'https://github.com/bl0xsmith/shader-lab'
tags: ['webgl', 'glsl', 'creative-coding', 'typescript', 'interactive']
featured: false
---

Shader Lab is a browser-based GLSL fragment shader editor. Write shader code on the left, see it render in real time on the right. No backend, no accounts — just open the URL and start coding.

## Features

- Split-pane editor with live preview (updates as you type)
- Built-in uniforms: `u_time`, `u_resolution`, `u_mouse`
- Error highlighting with inline GLSL diagnostics
- Gallery of starter shaders to learn from or remix
- Shareable URLs — the shader is encoded in the hash, no server needed
- Export current frame as a PNG

## Built-in Uniforms

```glsl
uniform float u_time;       // seconds elapsed
uniform vec2  u_resolution; // canvas dimensions in pixels
uniform vec2  u_mouse;      // mouse position, normalized 0–1
```

## Why GLSL in the Browser

The GPU is right there. Running shaders in WebGL means instant iteration with no compile step, and sharing is just a URL copy. It's the fastest way to experiment with procedural visuals.
