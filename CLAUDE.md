# rhai-code-demo-plugin

An OpenShift dynamic console plugin that embeds the RHAI Code Demos site (https://eformat.github.io/rhai-code-demo/) in an iframe.

## Dependencies

- **rhai-nav-plugin** must be deployed first — it defines the "RHAI" top-level navigation section that this plugin's nav item references.

## Architecture

- Single page plugin — renders an iframe pointing to the GitHub Pages demo site
- Uses an init container (ose-cli) to auto-enable itself in the console
- Nav item appears under the "RHAI" section as "Code Demos"

## Build & Deploy

```bash
# Build and push image
make podman-push

# Deploy via GitOps (ensure rhai-nav-plugin is deployed first)
oc apply -k ./gitops
```

## Project Structure

- `src/components/RhaiCodeDemoPage.tsx` - Main plugin component (iframe to GitHub Pages site)
- `console-extensions.json` - Plugin route (`/rhai-code-demo`) and nav entry under `section: rhai`
- `gitops/` - Kubernetes manifests (Namespace, ServiceAccount, RBAC, Deployment, Service, ConsolePlugin)
- `Makefile` - Build/push targets using podman
