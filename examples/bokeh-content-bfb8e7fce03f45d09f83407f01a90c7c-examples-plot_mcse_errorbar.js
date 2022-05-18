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
    
      
      
    
      const element = document.getElementById("55b1955e-86e3-445e-957a-e755e539fc11");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '55b1955e-86e3-445e-957a-e755e539fc11' but no matching script tag was found.")
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
                    
                  const docs_json = '{"d53e37e3-58c6-4859-a756-5b2d6abb9ef1":{"defs":[],"roots":{"references":[{"attributes":{"toolbar":{"id":"42098"},"toolbar_location":"above"},"id":"42099","type":"ToolbarBox"},{"attributes":{},"id":"42050","type":"ResetTool"},{"attributes":{},"id":"42051","type":"PanTool"},{"attributes":{"source":{"id":"42075"}},"id":"42080","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"42077","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"42069"},"glyph":{"id":"42070"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"42072"},"nonselection_glyph":{"id":"42071"},"view":{"id":"42074"}},"id":"42073","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"42076","type":"MultiLine"},{"attributes":{},"id":"42090","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"42057","type":"HoverTool"},{"attributes":{},"id":"42053","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"42075"},"glyph":{"id":"42076"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"42078"},"nonselection_glyph":{"id":"42077"},"view":{"id":"42080"}},"id":"42079","type":"GlyphRenderer"},{"attributes":{},"id":"42091","type":"Selection"},{"attributes":{"children":[[{"id":"42033"},0,0]]},"id":"42097","type":"GridBox"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","coordinates":null,"formatter":{"id":"42085"},"group":null,"major_label_policy":{"id":"42086"},"ticker":{"id":"42047"}},"id":"42046","type":"LinearAxis"},{"attributes":{"overlay":{"id":"42058"}},"id":"42052","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"42042"},"coordinates":null,"group":null,"ticker":null},"id":"42045","type":"Grid"},{"attributes":{},"id":"42056","type":"SaveTool"},{"attributes":{"axis":{"id":"42046"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"42049","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42072","type":"Scatter"},{"attributes":{"tools":[{"id":"42050"},{"id":"42051"},{"id":"42052"},{"id":"42053"},{"id":"42054"},{"id":"42055"},{"id":"42056"},{"id":"42057"}]},"id":"42060","type":"Toolbar"},{"attributes":{},"id":"42047","type":"BasicTicker"},{"attributes":{},"id":"42055","type":"UndoTool"},{"attributes":{},"id":"42040","type":"LinearScale"},{"attributes":{},"id":"42092","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"42059"}},"id":"42054","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42070","type":"Scatter"},{"attributes":{},"id":"42093","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"42059","type":"PolyAnnotation"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"+Pb8QR1Vsj+MDk73BYq3PyGJcH1IOro/R5qJktxXvD8QN5uHrHi+P+EQ5SCCFsA/nVhJgBDHwD+XHUgZYI7BP8j2F6KAXsI/quCp6LMbwz/9bt2KgNHDP6iPWFCyiMQ/uNKGtzpMxT8aURts6RbGP6Hdfy6V9cY/RM+ntqz9xz+OhgC/8fHIP+aFOeHb5sk//PpdgzyUyz/cM4wQ6vPNPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"42091"},"selection_policy":{"id":"42090"}},"id":"42069","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"42058","type":"BoxAnnotation"},{"attributes":{},"id":"42085","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"42069"}},"id":"42074","type":"CDSView"},{"attributes":{"below":[{"id":"42042"}],"center":[{"id":"42045"},{"id":"42049"}],"height":500,"left":[{"id":"42046"}],"output_backend":"webgl","renderers":[{"id":"42073"},{"id":"42079"}],"title":{"id":"42081"},"toolbar":{"id":"42060"},"toolbar_location":null,"width":500,"x_range":{"id":"42034"},"x_scale":{"id":"42038"},"y_range":{"id":"42036"},"y_scale":{"id":"42040"}},"id":"42033","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"42034","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"marker":{"value":"dash"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42071","type":"Scatter"},{"attributes":{},"id":"42086","type":"AllLabels"},{"attributes":{},"id":"42043","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"42060"}],"tools":[{"id":"42050"},{"id":"42051"},{"id":"42052"},{"id":"42053"},{"id":"42054"},{"id":"42055"},{"id":"42056"},{"id":"42057"}]},"id":"42098","type":"ProxyToolbar"},{"attributes":{},"id":"42038","type":"LinearScale"},{"attributes":{},"id":"42088","type":"BasicTickFormatter"},{"attributes":{},"id":"42036","type":"DataRange1d"},{"attributes":{"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.06542507260989384,0.07779740932825195],[0.08783828101486021,0.09606135597316004],[0.09938050528645676,0.10552315572600299],[0.10794861576931342,0.11348270780810846],[0.11602734321885094,0.12203033330056018],[0.12350211909750375,0.12787167939093885],[0.12891616867169003,0.13323376159544686],[0.13473004088066556,0.13958486303584752],[0.14096481555257187,0.1460531576744907],[0.14714684275886325,0.15141900007039433],[0.15249024001585332,0.15717175454660753],[0.15761692093229293,0.16322637365277673],[0.16410729163047846,0.16867037944462424],[0.17025660267247006,0.17489182297617661],[0.17657098829958856,0.18216819265595885],[0.185369502560243,0.18948857007780892],[0.19264880841245133,0.19711830100588604],[0.20027922695307082,0.2044362824100993],[0.2124901683329975,0.2184324622519046],[0.23108929611368745,0.2369230522137875]]},"selected":{"id":"42093"},"selection_policy":{"id":"42092"}},"id":"42075","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"text":"sigma_a"},"id":"42081","type":"Title"},{"attributes":{},"id":"42089","type":"AllLabels"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"42088"},"group":null,"major_label_policy":{"id":"42089"},"ticker":{"id":"42043"}},"id":"42042","type":"LinearAxis"},{"attributes":{"children":[{"id":"42099"},{"id":"42097"}]},"id":"42100","type":"Column"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"42078","type":"MultiLine"}],"root_ids":["42100"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"d53e37e3-58c6-4859-a756-5b2d6abb9ef1","root_ids":["42100"],"roots":{"42100":"55b1955e-86e3-445e-957a-e755e539fc11"}}];
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