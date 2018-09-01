/*!
 * Built with http://stenciljs.com
 * 2018-08-01T21:25:35
 */
(function(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

  function init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCorePolyfilled, hydratedCssClass, components, HTMLElementPrototype, App, x, y, scriptElm) {
    // create global namespace if it doesn't already exist
    App = win[namespace] = win[namespace] || {};
    App.components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    createComponentOnReadyPrototype(win, namespace, HTMLElementPrototype);
    resourcesUrl = resourcesUrl || App.resourcesUrl;
    // figure out the script element for this current script
    y = doc.querySelectorAll('script');
    for (x = y.length - 1; x >= 0; x--) {
        scriptElm = y[x];
        if (scriptElm.src || scriptElm.hasAttribute('data-resources-url')) {
            break;
        }
    }
    // get the resource path attribute on this script element
    y = scriptElm.getAttribute('data-resources-url');
    if (!resourcesUrl && y) {
        // the script element has a data-resources-url attribute, always use that
        resourcesUrl = y;
    }
    if (!resourcesUrl && scriptElm.src) {
        // we don't have an exact resourcesUrl, so let's
        // figure it out relative to this script's src and app's filesystem namespace
        y = scriptElm.src.split('/').slice(0, -1);
        resourcesUrl = (y.join('/')) + (y.length ? '/' : '') + fsNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    if (usePolyfills(win, win.location, x, 'import("")')) {
        // requires the es5/polyfilled core
        x.src = resourcesUrl + appCorePolyfilled;
    }
    else {
        // let's do this!
        x.src = resourcesUrl + appCore;
        x.setAttribute('type', 'module');
        x.setAttribute('crossorigin', true);
    }
    x.setAttribute('data-resources-url', resourcesUrl);
    x.setAttribute('data-namespace', fsNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=esm') > 0) {
        // force esm build
        return false;
    }
    if ((location.search.indexOf('core=es5') > 0) ||
        (location.protocol === 'file:') ||
        (!(win.customElements && win.customElements.define)) ||
        (!win.fetch) ||
        (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) ||
        (!('noModule' in scriptElm))) {
        // es5 build w/ polyfills
        return true;
    }
    // final test to see if this browser support dynamic imports
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}
function createComponentOnReadyPrototype(win, namespace, HTMLElementPrototype) {
    (win['s-apps'] = win['s-apps'] || []).push(namespace);
    if (!HTMLElementPrototype.componentOnReady) {
        HTMLElementPrototype.componentOnReady = function componentOnReady() {
            /*tslint:disable*/
            var elm = this;
            function executor(resolve) {
                if (elm.nodeName.indexOf('-') > 0) {
                    // window hasn't loaded yet and there's a
                    // good chance this is a custom element
                    var apps = win['s-apps'];
                    var appsReady = 0;
                    // loop through all the app namespaces
                    for (var i = 0; i < apps.length; i++) {
                        // see if this app has "componentOnReady" setup
                        if (win[apps[i]].componentOnReady) {
                            // this app's core has loaded call its "componentOnReady"
                            if (win[apps[i]].componentOnReady(elm, resolve)) {
                                // this component does belong to this app and would
                                // have fired off the resolve fn
                                // let's stop here, we're good
                                return;
                            }
                            appsReady++;
                        }
                    }
                    if (appsReady < apps.length) {
                        // not all apps are ready yet
                        // add it to the queue to be figured out when they are
                        (win['s-cr'] = win['s-cr'] || []).push([elm, resolve]);
                        return;
                    }
                }
                // not a recognized app component
                resolve(null);
            }
            // callback wasn't provided, let's return a promise
            if (win.Promise) {
                // use native/polyfilled promise
                return new win.Promise(executor);
            }
            // promise may not have been polyfilled yet
            return { then: executor };
        };
    }
}


  init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

  })(window, document, "nvcomponents","nvcomponents",0,"nvcomponents.core.js","es5-build-disabled.js","hydrated",[["material-icon","material-icon",1,[["color",1,0,1,2],["findDupes",6],["getIcon",6],["iconJSON",3,0,0,0,"iconJSON"],["icons",6],["iconsToJson",6],["size",1,0,1,2],["type",1,0,1,2]],1],["nv-checkbox","material-icon",1,[["disabled",1,0,1,3],["element",7],["label",1,0,1,2],["parentDisabled",1,0,"parent-disabled",3],["toggle",6],["value",1,0,1,1],["whenUpdate",1]],1],["nv-checkbox-array","material-icon",1,[["disabled",1,0,1,3],["element",7],["label",1,0,1,2],["parentDisabled",1,0,"parent-disabled",3],["values",1],["whenUpdate",1]],1],["nv-image","nv-image",1,[["cover",1,0,1,3],["url",1,0,1,2]],1],["nv-progress","nv-progress",1,[["element",7],["message",1,0,1,2],["reset",6],["showCount",1,0,"show-count",3],["speed",1,0,1,4],["start",1,0,1,4],["state",1,0,1,2],["timer",1,0,1,2],["type",1,0,1,2],["value",1,0,1,4]],1],["nv-tab-content","nv-tab-content",1,[["element",7]]],["nv-tabs","nv-tabs",1,[["element",7],["initial",1,0,1,4]]],["nv-tooltip","nv-tooltip",1,[["active",1,0,1,3],["delay",1,0,1,4],["element",7],["hideAfter",1,0,"hide-after",4],["position",1,0,1,2],["triggerOn",1,0,"trigger-on",2]],1]],HTMLElement.prototype);