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
    
      
      
    
      const element = document.getElementById("68640a85-1499-4c5f-947a-a21be0132eff");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '68640a85-1499-4c5f-947a-a21be0132eff' but no matching script tag was found.")
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
                    
                  const docs_json = '{"1b6f6ad4-db3d-4104-a326-d5ca293b2422":{"defs":[],"roots":{"references":[{"attributes":{"overlay":{"id":"20523"}},"id":"20518","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"20521","type":"HoverTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20522","type":"BoxAnnotation"},{"attributes":{},"id":"20514","type":"ResetTool"},{"attributes":{},"id":"20566","type":"Selection"},{"attributes":{},"id":"20570","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20572"},"selection_policy":{"id":"20571"}},"id":"20551","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20535","type":"Line"},{"attributes":{"source":{"id":"20539"}},"id":"20544","type":"CDSView"},{"attributes":{},"id":"20569","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"20551"},"glyph":{"id":"20552"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20554"},"nonselection_glyph":{"id":"20553"},"view":{"id":"20556"}},"id":"20555","type":"GlyphRenderer"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20534","type":"Line"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20548","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20536","type":"Line"},{"attributes":{},"id":"20571","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20547","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20539"},"glyph":{"id":"20540"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20542"},"nonselection_glyph":{"id":"20541"},"view":{"id":"20544"}},"id":"20543","type":"GlyphRenderer"},{"attributes":{},"id":"20502","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20552","type":"Circle"},{"attributes":{},"id":"20561","type":"AllLabels"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20546","type":"Circle"},{"attributes":{"axis":{"id":"20506"},"coordinates":null,"group":null,"ticker":null},"id":"20509","type":"Grid"},{"attributes":{"coordinates":null,"formatter":{"id":"20563"},"group":null,"major_label_policy":{"id":"20564"},"ticker":{"id":"20507"}},"id":"20506","type":"LinearAxis"},{"attributes":{"below":[{"id":"20506"}],"center":[{"id":"20509"},{"id":"20513"}],"height":360,"left":[{"id":"20510"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20537"},{"id":"20543"},{"id":"20549"},{"id":"20555"}],"title":{"id":"20557"},"toolbar":{"id":"20524"},"toolbar_location":null,"width":720,"x_range":{"id":"20498"},"x_scale":{"id":"20502"},"y_range":{"id":"20500"},"y_scale":{"id":"20504"}},"id":"20497","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20520","type":"SaveTool"},{"attributes":{"coordinates":null,"formatter":{"id":"20560"},"group":null,"major_label_policy":{"id":"20561"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20511"}},"id":"20510","type":"LinearAxis"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20568"},"selection_policy":{"id":"20567"}},"id":"20539","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20522"}},"id":"20516","type":"BoxZoomTool"},{"attributes":{},"id":"20500","type":"DataRange1d"},{"attributes":{"children":[{"id":"20578"},{"id":"20576"}]},"id":"20579","type":"Column"},{"attributes":{},"id":"20567","type":"UnionRenderers"},{"attributes":{},"id":"20511","type":"BasicTicker"},{"attributes":{},"id":"20572","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"20545"},"glyph":{"id":"20546"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20548"},"nonselection_glyph":{"id":"20547"},"view":{"id":"20550"}},"id":"20549","type":"GlyphRenderer"},{"attributes":{},"id":"20507","type":"BasicTicker"},{"attributes":{},"id":"20519","type":"UndoTool"},{"attributes":{"source":{"id":"20551"}},"id":"20556","type":"CDSView"},{"attributes":{},"id":"20504","type":"LinearScale"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20540","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20541","type":"Line"},{"attributes":{},"id":"20564","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"20533"},"glyph":{"id":"20534"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20536"},"nonselection_glyph":{"id":"20535"},"view":{"id":"20538"}},"id":"20537","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20523","type":"PolyAnnotation"},{"attributes":{"toolbars":[{"id":"20524"}],"tools":[{"id":"20514"},{"id":"20515"},{"id":"20516"},{"id":"20517"},{"id":"20518"},{"id":"20519"},{"id":"20520"},{"id":"20521"}]},"id":"20577","type":"ProxyToolbar"},{"attributes":{"source":{"id":"20533"}},"id":"20538","type":"CDSView"},{"attributes":{},"id":"20563","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"20545"}},"id":"20550","type":"CDSView"},{"attributes":{},"id":"20568","type":"Selection"},{"attributes":{},"id":"20498","type":"DataRange1d"},{"attributes":{"axis":{"id":"20510"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20513","type":"Grid"},{"attributes":{},"id":"20515","type":"PanTool"},{"attributes":{},"id":"20560","type":"BasicTickFormatter"},{"attributes":{},"id":"20517","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null},"id":"20557","type":"Title"},{"attributes":{},"id":"20565","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20553","type":"Circle"},{"attributes":{"toolbar":{"id":"20577"},"toolbar_location":"above"},"id":"20578","type":"ToolbarBox"},{"attributes":{"children":[[{"id":"20497"},0,0]]},"id":"20576","type":"GridBox"},{"attributes":{"tools":[{"id":"20514"},{"id":"20515"},{"id":"20516"},{"id":"20517"},{"id":"20518"},{"id":"20519"},{"id":"20520"},{"id":"20521"}]},"id":"20524","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20554","type":"Circle"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20542","type":"Line"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20566"},"selection_policy":{"id":"20565"}},"id":"20533","type":"ColumnDataSource"},{"attributes":{"data":{},"selected":{"id":"20570"},"selection_policy":{"id":"20569"}},"id":"20545","type":"ColumnDataSource"}],"root_ids":["20579"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"1b6f6ad4-db3d-4104-a326-d5ca293b2422","root_ids":["20579"],"roots":{"20579":"68640a85-1499-4c5f-947a-a21be0132eff"}}];
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