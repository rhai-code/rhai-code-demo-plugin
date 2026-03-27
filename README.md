# RHAI Code Demos Console Plugin

An OpenShift dynamic console plugin that embeds the RHAI Code Demos site in the console.

Dependencies: **rhai-nav-plugin** must be deployed first — it defines the "RHAI" top-level navigation section that this plugin's nav item references.section).

See [CLAUDE.md](CLAUDE.md) for more details.

## Deploy

Install using a GitOps approach and kustomize:

```bash
# Deploy the nav plugin first (if not already deployed)
oc apply -k ../rhai-nav-plugin/gitops

# Deploy this plugin
oc apply -k ./gitops
```

The plugin auto-enables itself in the console via an init container.

![ocp-console-plugin-demo.png](ocp-console-plugin-demo.png)

## Build image locally

```bash
yarn install
make podman-push
```
