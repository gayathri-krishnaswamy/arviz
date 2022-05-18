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
    
      
      
    
      const element = document.getElementById("fc389066-b649-4388-909b-b9b1d75f32e8");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fc389066-b649-4388-909b-b9b1d75f32e8' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7f732750-db2b-4168-b6d3-b47f2e3844e7":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21024","type":"UnionRenderers"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"21009"},{"id":"21003"}]},"id":"21014","type":"LegendItem"},{"attributes":{"axis":{"id":"20960"},"coordinates":null,"group":null,"ticker":null},"id":"20963","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"21005"},"glyph":{"id":"21006"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21008"},"nonselection_glyph":{"id":"21007"},"view":{"id":"21010"}},"id":"21009","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"20978"}],"tools":[{"id":"20968"},{"id":"20969"},{"id":"20970"},{"id":"20971"},{"id":"20972"},{"id":"20973"},{"id":"20974"},{"id":"20975"}]},"id":"21036","type":"ProxyToolbar"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"21019"},"group":null,"major_label_policy":{"id":"21020"},"ticker":{"id":"20965"}},"id":"20964","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20989","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20995","type":"Line"},{"attributes":{},"id":"20965","type":"BasicTicker"},{"attributes":{"source":{"id":"20993"}},"id":"20998","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20988","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21025"},"selection_policy":{"id":"21024"}},"id":"20987","type":"ColumnDataSource"},{"attributes":{},"id":"21023","type":"AllLabels"},{"attributes":{"source":{"id":"20987"}},"id":"20992","type":"CDSView"},{"attributes":{},"id":"20961","type":"BasicTicker"},{"attributes":{},"id":"20968","type":"ResetTool"},{"attributes":{},"id":"21022","type":"BasicTickFormatter"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"21013"},{"id":"21014"}],"location":"center_right","orientation":"horizontal"},"id":"21012","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21001","type":"Line"},{"attributes":{"axis":{"id":"20964"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20967","type":"Grid"},{"attributes":{},"id":"20969","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21027"},"selection_policy":{"id":"21026"}},"id":"20993","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20977","type":"PolyAnnotation"},{"attributes":{"tools":[{"id":"20968"},{"id":"20969"},{"id":"20970"},{"id":"20971"},{"id":"20972"},{"id":"20973"},{"id":"20974"},{"id":"20975"}]},"id":"20978","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21031"},"selection_policy":{"id":"21030"}},"id":"21005","type":"ColumnDataSource"},{"attributes":{},"id":"20971","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21011","type":"Span"},{"attributes":{},"id":"21020","type":"AllLabels"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20991"},{"id":"20997"}]},"id":"21013","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20990","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20993"},"glyph":{"id":"20994"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20996"},"nonselection_glyph":{"id":"20995"},"view":{"id":"20998"}},"id":"20997","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21007","type":"Circle"},{"attributes":{},"id":"20952","type":"DataRange1d"},{"attributes":{"source":{"id":"21005"}},"id":"21010","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"21015","type":"Title"},{"attributes":{},"id":"21025","type":"Selection"},{"attributes":{"children":[{"id":"21037"},{"id":"21035"}]},"id":"21038","type":"Column"},{"attributes":{},"id":"21028","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"20975","type":"HoverTool"},{"attributes":{"overlay":{"id":"20977"}},"id":"20972","type":"LassoSelectTool"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"21022"},"group":null,"major_label_policy":{"id":"21023"},"ticker":{"id":"20961"}},"id":"20960","type":"LinearAxis"},{"attributes":{},"id":"20973","type":"UndoTool"},{"attributes":{},"id":"20958","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"20987"},"glyph":{"id":"20988"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20990"},"nonselection_glyph":{"id":"20989"},"view":{"id":"20992"}},"id":"20991","type":"GlyphRenderer"},{"attributes":{},"id":"21019","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21006","type":"Circle"},{"attributes":{},"id":"21026","type":"UnionRenderers"},{"attributes":{},"id":"21030","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"21036"},"toolbar_location":"above"},"id":"21037","type":"ToolbarBox"},{"attributes":{},"id":"20974","type":"SaveTool"},{"attributes":{},"id":"21027","type":"Selection"},{"attributes":{"children":[[{"id":"20951"},0,0]]},"id":"21035","type":"GridBox"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20996","type":"Line"},{"attributes":{},"id":"20954","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21029"},"selection_policy":{"id":"21028"}},"id":"20999","type":"ColumnDataSource"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21000","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20994","type":"Line"},{"attributes":{},"id":"21031","type":"Selection"},{"attributes":{"above":[{"id":"21012"}],"below":[{"id":"20960"}],"center":[{"id":"20963"},{"id":"20967"}],"height":500,"left":[{"id":"20964"}],"output_backend":"webgl","renderers":[{"id":"20991"},{"id":"20997"},{"id":"21003"},{"id":"21009"},{"id":"21011"}],"title":{"id":"21015"},"toolbar":{"id":"20978"},"toolbar_location":null,"width":500,"x_range":{"id":"20952"},"x_scale":{"id":"20956"},"y_range":{"id":"20954"},"y_scale":{"id":"20958"}},"id":"20951","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20956","type":"LinearScale"},{"attributes":{"overlay":{"id":"20976"}},"id":"20970","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20976","type":"BoxAnnotation"},{"attributes":{"source":{"id":"20999"}},"id":"21004","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20999"},"glyph":{"id":"21000"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21002"},"nonselection_glyph":{"id":"21001"},"view":{"id":"21004"}},"id":"21003","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21008","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"21002","type":"Line"},{"attributes":{},"id":"21029","type":"Selection"}],"root_ids":["21038"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"7f732750-db2b-4168-b6d3-b47f2e3844e7","root_ids":["21038"],"roots":{"21038":"fc389066-b649-4388-909b-b9b1d75f32e8"}}];
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