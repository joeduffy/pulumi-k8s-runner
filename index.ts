import * as k8s from "@pulumi/kubernetes";
import * as path from "path";
import * as pulumi from "@pulumi/pulumi";

// Get the configurable location of the Kubernetes YAML files.
const config = new pulumi.Config();
const yamlPath = config.require("path");
const yamlGlob = config.require("glob");

// Slurp up all the configuration and hydrate it into Pulumi objects.
const configs = new k8s.yaml.ConfigGroup("configs", { files: path.join(yamlPath, yamlGlob) });
