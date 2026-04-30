import { createComponent } from "https://antoniocortes.github.io/base-webpage/js/component-generator.js";

const tagName = 'component-k8s-servicios';
const htmlFilename = 'servicios.html';

const baseUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf('/') + 1);
createComponent(tagName, baseUrl + htmlFilename);
