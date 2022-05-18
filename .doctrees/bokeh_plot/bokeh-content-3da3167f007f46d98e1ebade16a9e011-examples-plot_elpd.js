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
    
      
      
    
      const element = document.getElementById("f0396b00-3f24-44df-bf7a-0add60e75bd4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f0396b00-3f24-44df-bf7a-0add60e75bd4' but no matching script tag was found.")
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
                    
                  const docs_json = '{"a4487781-1275-42f9-a193-5ac2a2105749":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20655","type":"DataRange1d"},{"attributes":{},"id":"20702","type":"Selection"},{"attributes":{},"id":"20696","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20692","type":"Title"},{"attributes":{"axis":{"id":"20665"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20668","type":"Grid"},{"attributes":{},"id":"20672","type":"WheelZoomTool"},{"attributes":{},"id":"20674","type":"UndoTool"},{"attributes":{"callback":null},"id":"20676","type":"HoverTool"},{"attributes":{"toolbars":[{"id":"20679"}],"tools":[{"id":"20669"},{"id":"20670"},{"id":"20671"},{"id":"20672"},{"id":"20673"},{"id":"20674"},{"id":"20675"},{"id":"20676"}]},"id":"20707","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"20677"}},"id":"20671","type":"BoxZoomTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwCgPZTAZEQ/ABRdkUAak78AFo4kwaykPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20702"},"selection_policy":{"id":"20701"}},"id":"20689","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"20661"},"coordinates":null,"group":null,"ticker":null},"id":"20664","type":"Grid"},{"attributes":{},"id":"20653","type":"DataRange1d"},{"attributes":{},"id":"20697","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20677","type":"BoxAnnotation"},{"attributes":{},"id":"20699","type":"BasicTickFormatter"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20696"},"group":null,"major_label_policy":{"id":"20697"},"ticker":{"id":"20666"}},"id":"20665","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"20689"},"glyph":{"id":"20688"},"group":null,"hover_glyph":null,"view":{"id":"20691"}},"id":"20690","type":"GlyphRenderer"},{"attributes":{},"id":"20657","type":"LinearScale"},{"attributes":{"children":[[{"id":"20652"},0,0]]},"id":"20706","type":"GridBox"},{"attributes":{},"id":"20700","type":"AllLabels"},{"attributes":{},"id":"20666","type":"BasicTicker"},{"attributes":{"overlay":{"id":"20678"}},"id":"20673","type":"LassoSelectTool"},{"attributes":{"source":{"id":"20689"}},"id":"20691","type":"CDSView"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20688","type":"Scatter"},{"attributes":{},"id":"20669","type":"ResetTool"},{"attributes":{},"id":"20675","type":"SaveTool"},{"attributes":{"children":[{"id":"20708"},{"id":"20706"}]},"id":"20709","type":"Column"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20678","type":"PolyAnnotation"},{"attributes":{"toolbar":{"id":"20707"},"toolbar_location":"above"},"id":"20708","type":"ToolbarBox"},{"attributes":{},"id":"20670","type":"PanTool"},{"attributes":{"below":[{"id":"20661"}],"center":[{"id":"20664"},{"id":"20668"}],"height":288,"left":[{"id":"20665"}],"output_backend":"webgl","renderers":[{"id":"20690"}],"title":{"id":"20692"},"toolbar":{"id":"20679"},"toolbar_location":null,"width":432,"x_range":{"id":"20653"},"x_scale":{"id":"20657"},"y_range":{"id":"20655"},"y_scale":{"id":"20659"}},"id":"20652","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20701","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"20699"},"group":null,"major_label_policy":{"id":"20700"},"ticker":{"id":"20662"}},"id":"20661","type":"LinearAxis"},{"attributes":{"tools":[{"id":"20669"},{"id":"20670"},{"id":"20671"},{"id":"20672"},{"id":"20673"},{"id":"20674"},{"id":"20675"},{"id":"20676"}]},"id":"20679","type":"Toolbar"},{"attributes":{},"id":"20662","type":"BasicTicker"},{"attributes":{},"id":"20659","type":"LinearScale"}],"root_ids":["20709"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"a4487781-1275-42f9-a193-5ac2a2105749","root_ids":["20709"],"roots":{"20709":"f0396b00-3f24-44df-bf7a-0add60e75bd4"}}];
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