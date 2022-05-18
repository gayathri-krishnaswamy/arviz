(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("e8be993c-d7d1-4357-9929-df85e23e54b6");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e8be993c-d7d1-4357-9929-df85e23e54b6' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"110706ac-30e1-4ab4-936e-31f87b25776a":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17400"},"group":null,"major_label_policy":{"id":"17401"},"ticker":{"id":"17370"}},"id":"17369","type":"LinearAxis"},{"attributes":{},"id":"17406","type":"Selection"},{"attributes":{},"id":"17366","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"17411"},"toolbar_location":"above"},"id":"17412","type":"ToolbarBox"},{"attributes":{"children":[{"id":"17412"},{"id":"17410"}]},"id":"17413","type":"Column"},{"attributes":{},"id":"17361","type":"LinearScale"},{"attributes":{"toolbars":[{"id":"17383"}],"tools":[{"id":"17373"},{"id":"17374"},{"id":"17375"},{"id":"17376"},{"id":"17377"},{"id":"17378"},{"id":"17379"},{"id":"17380"}]},"id":"17411","type":"ProxyToolbar"},{"attributes":{"callback":null},"id":"17380","type":"HoverTool"},{"attributes":{},"id":"17376","type":"WheelZoomTool"},{"attributes":{},"id":"17404","type":"AllLabels"},{"attributes":{},"id":"17359","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"17393"},"glyph":{"id":"17392"},"group":null,"hover_glyph":null,"view":{"id":"17395"}},"id":"17394","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"formatter":{"id":"17403"},"group":null,"major_label_policy":{"id":"17404"},"ticker":{"id":"17366"}},"id":"17365","type":"LinearAxis"},{"attributes":{},"id":"17405","type":"UnionRenderers"},{"attributes":{"axis":{"id":"17365"},"coordinates":null,"group":null,"ticker":null},"id":"17368","type":"Grid"},{"attributes":{},"id":"17379","type":"SaveTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17382","type":"PolyAnnotation"},{"attributes":{},"id":"17400","type":"BasicTickFormatter"},{"attributes":{},"id":"17357","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17396","type":"Title"},{"attributes":{},"id":"17373","type":"ResetTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17406"},"selection_policy":{"id":"17405"}},"id":"17393","type":"ColumnDataSource"},{"attributes":{},"id":"17363","type":"LinearScale"},{"attributes":{"below":[{"id":"17365"}],"center":[{"id":"17368"},{"id":"17372"}],"height":288,"left":[{"id":"17369"}],"output_backend":"webgl","renderers":[{"id":"17394"}],"title":{"id":"17396"},"toolbar":{"id":"17383"},"toolbar_location":null,"width":432,"x_range":{"id":"17357"},"x_scale":{"id":"17361"},"y_range":{"id":"17359"},"y_scale":{"id":"17363"}},"id":"17356","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17374","type":"PanTool"},{"attributes":{},"id":"17403","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17392","type":"Scatter"},{"attributes":{"overlay":{"id":"17382"}},"id":"17377","type":"LassoSelectTool"},{"attributes":{"tools":[{"id":"17373"},{"id":"17374"},{"id":"17375"},{"id":"17376"},{"id":"17377"},{"id":"17378"},{"id":"17379"},{"id":"17380"}]},"id":"17383","type":"Toolbar"},{"attributes":{"axis":{"id":"17369"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17372","type":"Grid"},{"attributes":{},"id":"17378","type":"UndoTool"},{"attributes":{"source":{"id":"17393"}},"id":"17395","type":"CDSView"},{"attributes":{},"id":"17370","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17381","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"17381"}},"id":"17375","type":"BoxZoomTool"},{"attributes":{},"id":"17401","type":"AllLabels"},{"attributes":{"children":[[{"id":"17356"},0,0]]},"id":"17410","type":"GridBox"}],"root_ids":["17413"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"110706ac-30e1-4ab4-936e-31f87b25776a","root_ids":["17413"],"roots":{"17413":"e8be993c-d7d1-4357-9929-df85e23e54b6"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();