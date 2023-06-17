how TTDOM works:

- the root component is rendered, then it is patched to the DOM. The virtual dom will then discover that it has sub components, and will mount them. This triggers the rendering of each sub component, which will then be mounted. If they have sub components, the process keeps going: rendering, then mounting/patching, then rendering, and so on.