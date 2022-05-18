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
    
      
      
    
      const element = document.getElementById("fdcb188e-01de-459d-982e-3a8d4914a203");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'fdcb188e-01de-459d-982e-3a8d4914a203' but no matching script tag was found.")
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
                    
                  const docs_json = '{"c04e7967-a8bf-4599-96d5-0b11ae5d8e53":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"41867"},"glyph":{"id":"41868"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41870"},"nonselection_glyph":{"id":"41869"},"view":{"id":"41872"}},"id":"41871","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41875","type":"Span"},{"attributes":{},"id":"41836","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41907"},"selection_policy":{"id":"41906"}},"id":"41877","type":"ColumnDataSource"},{"attributes":{},"id":"41904","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41905"},"selection_policy":{"id":"41904"}},"id":"41867","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41874","type":"Span"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41916"},"group":null,"major_label_policy":{"id":"41917"},"ticker":{"id":"41841"}},"id":"41840","type":"LinearAxis"},{"attributes":{"below":[{"id":"41804"}],"center":[{"id":"41807"},{"id":"41811"}],"height":500,"left":[{"id":"41808"}],"output_backend":"webgl","renderers":[{"id":"41871"},{"id":"41873"},{"id":"41874"},{"id":"41875"},{"id":"41878"}],"title":{"id":"41880"},"toolbar":{"id":"41822"},"toolbar_location":null,"width":500,"x_range":{"id":"41796"},"x_scale":{"id":"41800"},"y_range":{"id":"41798"},"y_scale":{"id":"41802"}},"id":"41795","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41838","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41870","type":"Circle"},{"attributes":{},"id":"41905","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41869","type":"Circle"},{"attributes":{},"id":"41841","type":"BasicTicker"},{"attributes":{"axis":{"id":"41840"},"coordinates":null,"group":null,"ticker":null},"id":"41843","type":"Grid"},{"attributes":{"source":{"id":"41867"}},"id":"41872","type":"CDSView"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41876","type":"Scatter"},{"attributes":{"coordinates":null,"data_source":{"id":"41877"},"glyph":{"id":"41876"},"group":null,"hover_glyph":null,"view":{"id":"41879"}},"id":"41878","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41880","type":"Title"},{"attributes":{"axis":{"id":"41844"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41847","type":"Grid"},{"attributes":{"source":{"id":"41877"}},"id":"41879","type":"CDSView"},{"attributes":{},"id":"41845","type":"BasicTicker"},{"attributes":{"source":{"id":"41892"}},"id":"41894","type":"CDSView"},{"attributes":{"overlay":{"id":"41856"}},"id":"41850","type":"BoxZoomTool"},{"attributes":{},"id":"41849","type":"PanTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41921"},"selection_policy":{"id":"41920"}},"id":"41892","type":"ColumnDataSource"},{"attributes":{},"id":"41848","type":"ResetTool"},{"attributes":{},"id":"41854","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41895","type":"Title"},{"attributes":{},"id":"41851","type":"WheelZoomTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41919"},"selection_policy":{"id":"41918"}},"id":"41882","type":"ColumnDataSource"},{"attributes":{},"id":"41796","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"41892"},"glyph":{"id":"41891"},"group":null,"hover_glyph":null,"view":{"id":"41894"}},"id":"41893","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"41822"},{"id":"41858"}],"tools":[{"id":"41812"},{"id":"41813"},{"id":"41814"},{"id":"41815"},{"id":"41816"},{"id":"41817"},{"id":"41818"},{"id":"41819"},{"id":"41848"},{"id":"41849"},{"id":"41850"},{"id":"41851"},{"id":"41852"},{"id":"41853"},{"id":"41854"},{"id":"41855"}]},"id":"41926","type":"ProxyToolbar"},{"attributes":{},"id":"41906","type":"UnionRenderers"},{"attributes":{},"id":"41800","type":"LinearScale"},{"attributes":{"overlay":{"id":"41857"}},"id":"41852","type":"LassoSelectTool"},{"attributes":{},"id":"41907","type":"Selection"},{"attributes":{},"id":"41853","type":"UndoTool"},{"attributes":{"toolbar":{"id":"41926"},"toolbar_location":"above"},"id":"41927","type":"ToolbarBox"},{"attributes":{"end":1,"start":-0.05},"id":"41798","type":"DataRange1d"},{"attributes":{},"id":"41913","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41873","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41856","type":"BoxAnnotation"},{"attributes":{},"id":"41914","type":"AllLabels"},{"attributes":{"below":[{"id":"41840"}],"center":[{"id":"41843"},{"id":"41847"}],"height":500,"left":[{"id":"41844"}],"output_backend":"webgl","renderers":[{"id":"41886"},{"id":"41888"},{"id":"41889"},{"id":"41890"},{"id":"41893"}],"title":{"id":"41895"},"toolbar":{"id":"41858"},"toolbar_location":null,"width":500,"x_range":{"id":"41832"},"x_scale":{"id":"41836"},"y_range":{"id":"41834"},"y_scale":{"id":"41838"}},"id":"41831","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41916","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41868","type":"Circle"},{"attributes":{},"id":"41917","type":"AllLabels"},{"attributes":{"tools":[{"id":"41812"},{"id":"41813"},{"id":"41814"},{"id":"41815"},{"id":"41816"},{"id":"41817"},{"id":"41818"},{"id":"41819"}]},"id":"41822","type":"Toolbar"},{"attributes":{},"id":"41802","type":"LinearScale"},{"attributes":{},"id":"41805","type":"BasicTicker"},{"attributes":{"children":[{"id":"41927"},{"id":"41925"}]},"id":"41928","type":"Column"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41902"},"group":null,"major_label_policy":{"id":"41903"},"ticker":{"id":"41805"}},"id":"41804","type":"LinearAxis"},{"attributes":{"tools":[{"id":"41848"},{"id":"41849"},{"id":"41850"},{"id":"41851"},{"id":"41852"},{"id":"41853"},{"id":"41854"},{"id":"41855"}]},"id":"41858","type":"Toolbar"},{"attributes":{"callback":null},"id":"41819","type":"HoverTool"},{"attributes":{"axis":{"id":"41804"},"coordinates":null,"group":null,"ticker":null},"id":"41807","type":"Grid"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41899"},"group":null,"major_label_policy":{"id":"41900"},"ticker":{"id":"41809"}},"id":"41808","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41883","type":"Circle"},{"attributes":{},"id":"41809","type":"BasicTicker"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41857","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"41795"},0,0],[{"id":"41831"},0,1]]},"id":"41925","type":"GridBox"},{"attributes":{"source":{"id":"41882"}},"id":"41887","type":"CDSView"},{"attributes":{},"id":"41918","type":"UnionRenderers"},{"attributes":{"axis":{"id":"41808"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41811","type":"Grid"},{"attributes":{},"id":"41817","type":"UndoTool"},{"attributes":{},"id":"41919","type":"Selection"},{"attributes":{"overlay":{"id":"41820"}},"id":"41814","type":"BoxZoomTool"},{"attributes":{},"id":"41813","type":"PanTool"},{"attributes":{},"id":"41812","type":"ResetTool"},{"attributes":{},"id":"41818","type":"SaveTool"},{"attributes":{},"id":"41815","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"41882"},"glyph":{"id":"41883"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41885"},"nonselection_glyph":{"id":"41884"},"view":{"id":"41887"}},"id":"41886","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"41821"}},"id":"41816","type":"LassoSelectTool"},{"attributes":{},"id":"41832","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41885","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41884","type":"Circle"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41820","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41890","type":"Span"},{"attributes":{},"id":"41899","type":"BasicTickFormatter"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41913"},"group":null,"major_label_policy":{"id":"41914"},"ticker":{"id":"41845"}},"id":"41844","type":"LinearAxis"},{"attributes":{},"id":"41900","type":"AllLabels"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41891","type":"Scatter"},{"attributes":{"callback":null},"id":"41855","type":"HoverTool"},{"attributes":{},"id":"41902","type":"BasicTickFormatter"},{"attributes":{},"id":"41920","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41889","type":"Span"},{"attributes":{"end":1,"start":-0.05},"id":"41834","type":"DataRange1d"},{"attributes":{},"id":"41921","type":"Selection"},{"attributes":{},"id":"41903","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41888","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41821","type":"PolyAnnotation"}],"root_ids":["41928"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"c04e7967-a8bf-4599-96d5-0b11ae5d8e53","root_ids":["41928"],"roots":{"41928":"fdcb188e-01de-459d-982e-3a8d4914a203"}}];
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