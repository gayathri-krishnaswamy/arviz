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
    
      
      
    
      const element = document.getElementById("266e20d9-8f58-4ab3-9a7b-c5c3650af02f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '266e20d9-8f58-4ab3-9a7b-c5c3650af02f' but no matching script tag was found.")
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
                    
                  const docs_json = '{"0441aed9-1075-410e-a1fa-accf2d7f3dde":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"formatter":{"id":"23909"},"group":null,"major_label_policy":{"id":"23910"},"ticker":{"id":"23866"}},"id":"23865","type":"LinearAxis"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23889","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"Tgi1ZrZw8D8Mb72D/G/wP8gdvy3AfvA/DHNXHR6W8D8atdawi87wP2iUTBwPCfE/56bZ+iZW8T+U425xc7rxP4tNYkO+vvE/UMWhU01L8j9cqR61JvbyP+xJslqi+PI/gWSMqRzJ8z8ob8742TH0PysVJhhflfQ/us/1Z45n9T/wNH48jW31P5qRI2LDWPY/vPotgECp9j9A5bd0m3H3P4TA3cPz5Pc/Gr7NrmGk+D9Qho0HpyD5P+aEJNfr6fk/GEw9S1pc+j8M5DGgIGD7P+QR7Y4NmPs/rNec0sDT/D+5BHacLyH9P3idTBZ0D/4/pMYxkzkB/z9AY/xZJ0v/P4QU1k5tQwBAI6dBBr2vAEBq963wRuEAQE7ahZIgfwFANL1dNPocAkAYoDXW07oCQP6CDXitWANAhs9vI6KuA0DiZeUZh/YDQMhIvbtglARArCuVXToyBUCSDm3/E9AFQHbxRKHtbQZAAV19A46wBkBc1BxDxwsHQCieCLWoUAdAQLf05KCpB0A/AaLesrUHQHSiDBXu+AdAtYrErs0wCEAmmsyGekcIQMlR/ntJVAhAQEDrZBheCEA59daG61IIQCaazIZ6RwhAoevTuN86CECdXJh17RoIQGjWsplr9wdAQnLjI+zRB0BAt/TkoKkHQE2hsY/GoQdAvSFFNE1aB0Bc1BxDxwsHQM61Pw4e/wZA/3IoYg6eBkB28USh7W0GQKJaZf1WNgZAkg5t/xPQBUCWeSAUtsMFQFOuuOb+SAVArCuVXToyBUCKaT55fbgEQMhIvbtglARAV7dOMnn7A0DiZeUZh/YDQP6CDXitWANApMquQLE2A0AYoDXW07oCQDp655AvgwJANL1dNPocAkCS9TcQlMUBQE7ahZIgfwFAavet8EbhAEAoets+8bgAQIQU1k5tQwBAQGP8WSdL/z94nUwWdA/+P8NWGPni/f0/rNec0sDT/D/kEe2ODZj7PxhMPUtaXPo/UIaNB6cg+T+EwN3D8+T3P7z6LYBAqfY/8DR+PI1t9T/urzJ3suv0PyhvzvjZMfQ/Xn2sifD88j9cqR61JvbyP0gaXvM+yPE/lONucXO68T9uyQB1lhDxPygwcRmTq/A/9Bbrqb+F8D/IHb8twH7wP04ItWa2cPA/","dtype":"float64","order":"little","shape":[108]},"y":{"__ndarray__":"tj54HNZW+T9VXSJ9+Gn6P+xzt/sl1/o/9HvM3Rp9+z+SmnY+PZD8PzC5IJ9fo/0/0NfK/4G2/j8i+8QvoL7/P3D2dGCkyf8/hoqPYGNuAEDvFKxqJvYAQNaZ5JD09wBAJqk5wYWBAUCMiZuAYscBQHS4jvEWCwJAxMfjIaiUAkDMngAiIZgCQBTXOFI5HgNAjQWxTJ1HA0Bk5o2CyqcDQJh0gYW+3wNAsvXislsxBECG8obVqmkEQAIFOOPsugRArSPKMPTmBEBSFI0TfkQFQCJl/M/uVQVAVlHtVqK2BUCgI+JDD84FQLqlyLkFFAZA8DI3dKBXBkBYKauyqWsGQCtuDqY3tAZAQEKMpDHhBkAwPAYVffQGQOhzUo+ELAdArWlmB5FWB0B793yu02QHQP3eKIubZgdAjlHh1MJqB0AZNnLZLW4HQI5R4dTCagdAS5QGC+hHB0A+cnGnzCUHQByhCt1pAgdAQEKMpDHhBkC439tB2J4GQPAyN3SgVwZA9MlDG3riBUCgI+JDD84FQFIUjRN+RAVAAgU44+y6BEB4EqaPxmYEQLL14rJbMQRAZOaNgsqnA0AU1zhSOR4DQEwaissH3gJAxMfjIaiUAkB0uI7xFgsCQCapOcGFgQFA1pnkkPT3AEBMrCU/W4QAQIaKj2BjbgBAcPZ0YKTJ/z/YofaXoNz+P9DXyv+Btv4/MLkgn1+j/T8uLB0hASP9P5Kadj49kPw/milSI7eZ+z/0e8zdGn37P1RdIn34afo/1h7syBs7+j+2Pngc1lb5P8pQWk0MHPk/FiDOu7ND+D8AG+YS0Tz4Py6YohVSYvc/eAEkW5Ew9z9vAiIVaXD2P9riefpuHfY/xFpviI189T86xM+ZTAr1P66OXwEUrPQ/on2Cl7ER9D+cpSU5KvfzP6djM9a4qvM/oW/Nuy9K8z/KaFppe+nyP/yGe9gH5PI/rUF67s2F8j8xoPJ+MkXyP9V8gKMVLfI/PdMIWxQn8j9n8YD4ZyDyP0P2zypsPvI/368vgTSi8j/8hnvYB+TyP4xcgdMIQfM/nKUlOSr38z+5NwoCEfzzPzrEz5lMCvU/07Qme3Mb9T/a4nn6bh32P3gBJFuRMPc/FiDOu7ND+D8U+Qxx6J34P7Y+eBzWVvk/","dtype":"float64","order":"little","shape":[108]}},"selected":{"id":"23919"},"selection_policy":{"id":"23918"}},"id":"23900","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"23877"}},"id":"23871","type":"BoxZoomTool"},{"attributes":{"source":{"id":"23900"}},"id":"23905","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"23894"},"glyph":{"id":"23895"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23897"},"nonselection_glyph":{"id":"23896"},"view":{"id":"23899"}},"id":"23898","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"23865"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23868","type":"Grid"},{"attributes":{},"id":"23874","type":"UndoTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23877","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23896","type":"Patch"},{"attributes":{},"id":"23875","type":"SaveTool"},{"attributes":{"source":{"id":"23894"}},"id":"23899","type":"CDSView"},{"attributes":{},"id":"23910","type":"AllLabels"},{"attributes":{"children":[[{"id":"23852"},0,0]]},"id":"23923","type":"GridBox"},{"attributes":{},"id":"23862","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[530]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[530]}},"selected":{"id":"23915"},"selection_policy":{"id":"23914"}},"id":"23888","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"23888"},"glyph":{"id":"23889"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23891"},"nonselection_glyph":{"id":"23890"},"view":{"id":"23893"}},"id":"23892","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"23879"}],"tools":[{"id":"23869"},{"id":"23870"},{"id":"23871"},{"id":"23872"},{"id":"23873"},{"id":"23874"},{"id":"23875"},{"id":"23876"}]},"id":"23924","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"formatter":{"id":"23912"},"group":null,"major_label_policy":{"id":"23913"},"ticker":{"id":"23862"}},"id":"23861","type":"LinearAxis"},{"attributes":{},"id":"23913","type":"AllLabels"},{"attributes":{"children":[{"id":"23925"},{"id":"23923"}]},"id":"23926","type":"Column"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23878","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23890","type":"Patch"},{"attributes":{},"id":"23912","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"23888"}},"id":"23893","type":"CDSView"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23891","type":"Patch"},{"attributes":{},"id":"23853","type":"DataRange1d"},{"attributes":{},"id":"23866","type":"BasicTicker"},{"attributes":{},"id":"23909","type":"BasicTickFormatter"},{"attributes":{},"id":"23869","type":"ResetTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[320]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[320]}},"selected":{"id":"23917"},"selection_policy":{"id":"23916"}},"id":"23894","type":"ColumnDataSource"},{"attributes":{},"id":"23916","type":"UnionRenderers"},{"attributes":{},"id":"23857","type":"LinearScale"},{"attributes":{},"id":"23914","type":"UnionRenderers"},{"attributes":{},"id":"23918","type":"UnionRenderers"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23895","type":"Patch"},{"attributes":{},"id":"23855","type":"DataRange1d"},{"attributes":{"overlay":{"id":"23878"}},"id":"23873","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23903","type":"Patch"},{"attributes":{"toolbar":{"id":"23924"},"toolbar_location":"above"},"id":"23925","type":"ToolbarBox"},{"attributes":{},"id":"23919","type":"Selection"},{"attributes":{},"id":"23859","type":"LinearScale"},{"attributes":{"below":[{"id":"23861"}],"center":[{"id":"23864"},{"id":"23868"}],"height":500,"left":[{"id":"23865"}],"output_backend":"webgl","renderers":[{"id":"23892"},{"id":"23898"},{"id":"23904"}],"title":{"id":"23906"},"toolbar":{"id":"23879"},"toolbar_location":null,"width":500,"x_range":{"id":"23853"},"x_scale":{"id":"23857"},"y_range":{"id":"23855"},"y_scale":{"id":"23859"}},"id":"23852","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23901","type":"Patch"},{"attributes":{},"id":"23917","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"23900"},"glyph":{"id":"23901"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23903"},"nonselection_glyph":{"id":"23902"},"view":{"id":"23905"}},"id":"23904","type":"GlyphRenderer"},{"attributes":{},"id":"23872","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23897","type":"Patch"},{"attributes":{"callback":null},"id":"23876","type":"HoverTool"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23902","type":"Patch"},{"attributes":{},"id":"23915","type":"Selection"},{"attributes":{"axis":{"id":"23861"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23864","type":"Grid"},{"attributes":{},"id":"23870","type":"PanTool"},{"attributes":{"coordinates":null,"group":null},"id":"23906","type":"Title"},{"attributes":{"tools":[{"id":"23869"},{"id":"23870"},{"id":"23871"},{"id":"23872"},{"id":"23873"},{"id":"23874"},{"id":"23875"},{"id":"23876"}]},"id":"23879","type":"Toolbar"}],"root_ids":["23926"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"0441aed9-1075-410e-a1fa-accf2d7f3dde","root_ids":["23926"],"roots":{"23926":"266e20d9-8f58-4ab3-9a7b-c5c3650af02f"}}];
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