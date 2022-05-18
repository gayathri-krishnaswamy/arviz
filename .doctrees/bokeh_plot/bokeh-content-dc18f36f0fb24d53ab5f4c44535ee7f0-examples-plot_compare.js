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
    
      
      
    
      const element = document.getElementById("0246b699-20cf-4381-95ae-be07eb7a1573");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0246b699-20cf-4381-95ae-be07eb7a1573' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9753192d-e401-478f-be59-338d549c8651":{"defs":[],"roots":{"references":[{"attributes":{"end":0.5,"start":-1.5},"id":"18154","type":"DataRange1d"},{"attributes":{},"id":"18235","type":"UnionRenderers"},{"attributes":{},"id":"18161","type":"BasicTicker"},{"attributes":{},"id":"18171","type":"WheelZoomTool"},{"attributes":{"source":{"id":"18207"}},"id":"18212","type":"CDSView"},{"attributes":{},"id":"18236","type":"Selection"},{"attributes":{},"id":"18168","type":"ResetTool"},{"attributes":{"source":{"id":"18201"}},"id":"18206","type":"CDSView"},{"attributes":{"source":{"id":"18213"}},"id":"18218","type":"CDSView"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.68796724389903},"id":"18219","type":"Span"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18190","type":"Scatter"},{"attributes":{"toolbar":{"id":"18241"},"toolbar_location":"above"},"id":"18242","type":"ToolbarBox"},{"attributes":{"coordinates":null,"data_source":{"id":"18201"},"glyph":{"id":"18202"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18204"},"nonselection_glyph":{"id":"18203"},"view":{"id":"18206"}},"id":"18205","type":"GlyphRenderer"},{"attributes":{},"id":"18227","type":"UnionRenderers"},{"attributes":{"tools":[{"id":"18168"},{"id":"18169"},{"id":"18170"},{"id":"18171"},{"id":"18172"},{"id":"18173"},{"id":"18174"},{"id":"18175"}]},"id":"18178","type":"Toolbar"},{"attributes":{"data":{"xs":[[-32.05318232491158,-29.322752162886484],[-32.237685546932575,-29.38343126345932]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18234"},"selection_policy":{"id":"18233"}},"id":"18207","type":"ColumnDataSource"},{"attributes":{},"id":"18226","type":"AllLabels"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18236"},"selection_policy":{"id":"18235"}},"id":"18213","type":"ColumnDataSource"},{"attributes":{},"id":"18229","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18214","type":"Circle"},{"attributes":{"source":{"id":"18189"}},"id":"18194","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18197","type":"MultiLine"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18208","type":"MultiLine"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18216","type":"Circle"},{"attributes":{"axis":{"id":"18164"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18167","type":"Grid"},{"attributes":{"overlay":{"id":"18177"}},"id":"18172","type":"LassoSelectTool"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18210","type":"MultiLine"},{"attributes":{"callback":null},"id":"18175","type":"HoverTool"},{"attributes":{},"id":"18222","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18204","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18215","type":"Circle"},{"attributes":{},"id":"18223","type":"AllLabels"},{"attributes":{},"id":"18156","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18203","type":"Circle"},{"attributes":{},"id":"18230","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18209","type":"MultiLine"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18187","type":"FixedTicker"},{"attributes":{},"id":"18152","type":"DataRange1d"},{"attributes":{"source":{"id":"18195"}},"id":"18200","type":"CDSView"},{"attributes":{"axis":{"id":"18160"},"coordinates":null,"group":null,"ticker":null},"id":"18163","type":"Grid"},{"attributes":{},"id":"18174","type":"SaveTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18207"},"glyph":{"id":"18208"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18210"},"nonselection_glyph":{"id":"18209"},"view":{"id":"18212"}},"id":"18211","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18177","type":"PolyAnnotation"},{"attributes":{"children":[{"id":"18242"},{"id":"18240"}]},"id":"18243","type":"Column"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18225"},"group":null,"major_label_policy":{"id":"18226"},"ticker":{"id":"18161"}},"id":"18160","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"18213"},"glyph":{"id":"18214"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18216"},"nonselection_glyph":{"id":"18215"},"view":{"id":"18218"}},"id":"18217","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"18178"}],"tools":[{"id":"18168"},{"id":"18169"},{"id":"18170"},{"id":"18171"},{"id":"18172"},{"id":"18173"},{"id":"18174"},{"id":"18175"}]},"id":"18241","type":"ProxyToolbar"},{"attributes":{"children":[[{"id":"18151"},0,0]]},"id":"18240","type":"GridBox"},{"attributes":{"overlay":{"id":"18176"}},"id":"18170","type":"BoxZoomTool"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18198","type":"MultiLine"},{"attributes":{},"id":"18158","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"18195"},"glyph":{"id":"18196"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18198"},"nonselection_glyph":{"id":"18197"},"view":{"id":"18200"}},"id":"18199","type":"GlyphRenderer"},{"attributes":{},"id":"18169","type":"PanTool"},{"attributes":{"coordinates":null,"data_source":{"id":"18189"},"glyph":{"id":"18190"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18192"},"nonselection_glyph":{"id":"18191"},"view":{"id":"18194"}},"id":"18193","type":"GlyphRenderer"},{"attributes":{},"id":"18234","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"hNBxwYDPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18228"},"selection_policy":{"id":"18227"}},"id":"18189","type":"ColumnDataSource"},{"attributes":{},"id":"18233","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18176","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18192","type":"Scatter"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18202","type":"Circle"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18196","type":"MultiLine"},{"attributes":{"coordinates":null,"formatter":{"id":"18222"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18223"},"ticker":{"id":"18187"}},"id":"18164","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"/kMNnx6wPsCE0HHBgM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18232"},"selection_policy":{"id":"18231"}},"id":"18201","type":"ColumnDataSource"},{"attributes":{},"id":"18173","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18191","type":"Scatter"},{"attributes":{},"id":"18231","type":"UnionRenderers"},{"attributes":{"data":{"xs":[[-30.896720059785245,-30.72439675060665]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18230"},"selection_policy":{"id":"18229"}},"id":"18195","type":"ColumnDataSource"},{"attributes":{},"id":"18225","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"18160"}],"center":[{"id":"18163"},{"id":"18167"}],"height":500,"left":[{"id":"18164"}],"output_backend":"webgl","renderers":[{"id":"18193"},{"id":"18199"},{"id":"18205"},{"id":"18211"},{"id":"18217"},{"id":"18219"}],"title":{"id":"18220"},"toolbar":{"id":"18178"},"toolbar_location":null,"width":500,"x_range":{"id":"18152"},"x_scale":{"id":"18156"},"y_range":{"id":"18154"},"y_scale":{"id":"18158"}},"id":"18151","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"group":null},"id":"18220","type":"Title"},{"attributes":{},"id":"18228","type":"Selection"},{"attributes":{},"id":"18232","type":"Selection"}],"root_ids":["18243"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"9753192d-e401-478f-be59-338d549c8651","root_ids":["18243"],"roots":{"18243":"0246b699-20cf-4381-95ae-be07eb7a1573"}}];
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