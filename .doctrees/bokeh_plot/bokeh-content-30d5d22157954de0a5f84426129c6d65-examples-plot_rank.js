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
    
      
      
    
      const element = document.getElementById("8dbcc39c-7576-4e9c-bf97-13236df41378");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8dbcc39c-7576-4e9c-bf97-13236df41378' but no matching script tag was found.")
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
                    
                  const docs_json = '{"00d69373-17c5-4a43-8dcf-2148127dad5c":{"defs":[],"roots":{"references":[{"attributes":{},"id":"48340","type":"LinearScale"},{"attributes":{},"id":"48475","type":"UnionRenderers"},{"attributes":{},"id":"48476","type":"Selection"},{"attributes":{},"id":"48490","type":"UnionRenderers"},{"attributes":{},"id":"48491","type":"Selection"},{"attributes":{},"id":"48477","type":"UnionRenderers"},{"attributes":{},"id":"48478","type":"Selection"},{"attributes":{},"id":"48492","type":"UnionRenderers"},{"attributes":{},"id":"48493","type":"Selection"},{"attributes":{},"id":"48336","type":"DataRange1d"},{"attributes":{},"id":"48372","type":"LinearScale"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48471"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48472"},"ticker":{"id":"48343"}},"id":"48342","type":"LinearAxis"},{"attributes":{},"id":"48479","type":"UnionRenderers"},{"attributes":{},"id":"48480","type":"Selection"},{"attributes":{},"id":"48494","type":"UnionRenderers"},{"attributes":{},"id":"48495","type":"Selection"},{"attributes":{},"id":"48485","type":"BasicTickFormatter"},{"attributes":{},"id":"48486","type":"AllLabels"},{"attributes":{"below":[{"id":"48342"}],"center":[{"id":"48345"},{"id":"48349"},{"id":"48409"},{"id":"48416"},{"id":"48423"},{"id":"48430"}],"height":331,"left":[{"id":"48346"}],"output_backend":"webgl","renderers":[{"id":"48407"},{"id":"48414"},{"id":"48421"},{"id":"48428"}],"title":{"id":"48433"},"toolbar":{"id":"48360"},"toolbar_location":null,"width":496,"x_range":{"id":"48334"},"x_scale":{"id":"48338"},"y_range":{"id":"48336"},"y_scale":{"id":"48340"}},"id":"48333","subtype":"Figure","type":"Plot"},{"attributes":{"ticks":[0,1,2,3]},"id":"48431","type":"FixedTicker"},{"attributes":{},"id":"48488","type":"BasicTickFormatter"},{"attributes":{},"id":"48334","type":"DataRange1d"},{"attributes":{},"id":"48338","type":"LinearScale"},{"attributes":{},"id":"48489","type":"AllLabels"},{"attributes":{},"id":"48496","type":"UnionRenderers"},{"attributes":{},"id":"48497","type":"Selection"},{"attributes":{"tools":[{"id":"48384"},{"id":"48385"},{"id":"48386"},{"id":"48387"},{"id":"48388"},{"id":"48389"},{"id":"48390"},{"id":"48391"}]},"id":"48394","type":"Toolbar"},{"attributes":{"below":[{"id":"48376"}],"center":[{"id":"48379"},{"id":"48383"},{"id":"48441"},{"id":"48448"},{"id":"48455"},{"id":"48462"}],"height":331,"left":[{"id":"48380"}],"output_backend":"webgl","renderers":[{"id":"48439"},{"id":"48446"},{"id":"48453"},{"id":"48460"}],"title":{"id":"48465"},"toolbar":{"id":"48394"},"toolbar_location":null,"width":496,"x_range":{"id":"48334"},"x_scale":{"id":"48372"},"y_range":{"id":"48336"},"y_scale":{"id":"48374"}},"id":"48369","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48359","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48406","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48418","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48433","type":"Title"},{"attributes":{"axis":{"id":"48376"},"coordinates":null,"group":null,"ticker":null},"id":"48379","type":"Grid"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48420","type":"VBar"},{"attributes":{"axis":{"id":"48346"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48349","type":"Grid"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48485"},"group":null,"major_label_policy":{"id":"48486"},"ticker":{"id":"48463"}},"id":"48380","type":"LinearAxis"},{"attributes":{"source":{"id":"48410"}},"id":"48415","type":"CDSView"},{"attributes":{"callback":null},"id":"48357","type":"HoverTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48413","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48416","type":"Span"},{"attributes":{},"id":"48343","type":"BasicTicker"},{"attributes":{"source":{"id":"48417"}},"id":"48422","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48410"},"glyph":{"id":"48411"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48413"},"nonselection_glyph":{"id":"48412"},"view":{"id":"48415"}},"id":"48414","type":"GlyphRenderer"},{"attributes":{},"id":"48377","type":"BasicTicker"},{"attributes":{"source":{"id":"48424"}},"id":"48429","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48478"},"selection_policy":{"id":"48477"}},"id":"48417","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48423","type":"Span"},{"attributes":{},"id":"48374","type":"LinearScale"},{"attributes":{"callback":null},"id":"48391","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48417"},"glyph":{"id":"48418"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48420"},"nonselection_glyph":{"id":"48419"},"view":{"id":"48422"}},"id":"48421","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48488"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48489"},"ticker":{"id":"48377"}},"id":"48376","type":"LinearAxis"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48427","type":"VBar"},{"attributes":{"toolbar":{"id":"48502"},"toolbar_location":"above"},"id":"48503","type":"ToolbarBox"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48419","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48425","type":"VBar"},{"attributes":{"axis":{"id":"48342"},"coordinates":null,"group":null,"ticker":null},"id":"48345","type":"Grid"},{"attributes":{},"id":"48468","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"48333"},0,0],[{"id":"48369"},0,1]]},"id":"48501","type":"GridBox"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48480"},"selection_policy":{"id":"48479"}},"id":"48424","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48430","type":"Span"},{"attributes":{"axis":{"id":"48380"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48383","type":"Grid"},{"attributes":{},"id":"48469","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"48424"},"glyph":{"id":"48425"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48427"},"nonselection_glyph":{"id":"48426"},"view":{"id":"48429"}},"id":"48428","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48465","type":"Title"},{"attributes":{"ticks":[0,1,2,3]},"id":"48463","type":"FixedTicker"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48426","type":"VBar"},{"attributes":{},"id":"48471","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48443","type":"VBar"},{"attributes":{},"id":"48355","type":"UndoTool"},{"attributes":{},"id":"48385","type":"PanTool"},{"attributes":{"overlay":{"id":"48359"}},"id":"48354","type":"LassoSelectTool"},{"attributes":{},"id":"48384","type":"ResetTool"},{"attributes":{},"id":"48472","type":"AllLabels"},{"attributes":{},"id":"48390","type":"SaveTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48491"},"selection_policy":{"id":"48490"}},"id":"48435","type":"ColumnDataSource"},{"attributes":{},"id":"48387","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"48393"}},"id":"48388","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"data_source":{"id":"48435"},"glyph":{"id":"48436"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48438"},"nonselection_glyph":{"id":"48437"},"view":{"id":"48440"}},"id":"48439","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48474"},"selection_policy":{"id":"48473"}},"id":"48403","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48438","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48436","type":"VBar"},{"attributes":{"overlay":{"id":"48392"}},"id":"48386","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48404","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48405","type":"VBar"},{"attributes":{"overlay":{"id":"48358"}},"id":"48352","type":"BoxZoomTool"},{"attributes":{"source":{"id":"48442"}},"id":"48447","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48437","type":"VBar"},{"attributes":{"source":{"id":"48435"}},"id":"48440","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48411","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48445","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48403"},"glyph":{"id":"48404"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48406"},"nonselection_glyph":{"id":"48405"},"view":{"id":"48408"}},"id":"48407","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48441","type":"Span"},{"attributes":{"source":{"id":"48449"}},"id":"48454","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48493"},"selection_policy":{"id":"48492"}},"id":"48442","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48448","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48442"},"glyph":{"id":"48443"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48445"},"nonselection_glyph":{"id":"48444"},"view":{"id":"48447"}},"id":"48446","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48452","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48412","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48444","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48476"},"selection_policy":{"id":"48475"}},"id":"48410","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48450","type":"VBar"},{"attributes":{"children":[{"id":"48503"},{"id":"48501"}]},"id":"48504","type":"Column"},{"attributes":{"source":{"id":"48403"}},"id":"48408","type":"CDSView"},{"attributes":{"source":{"id":"48456"}},"id":"48461","type":"CDSView"},{"attributes":{},"id":"48350","type":"ResetTool"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48495"},"selection_policy":{"id":"48494"}},"id":"48449","type":"ColumnDataSource"},{"attributes":{},"id":"48473","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48455","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48449"},"glyph":{"id":"48450"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48452"},"nonselection_glyph":{"id":"48451"},"view":{"id":"48454"}},"id":"48453","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48459","type":"VBar"},{"attributes":{},"id":"48474","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48451","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48457","type":"VBar"},{"attributes":{},"id":"48351","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48409","type":"Span"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48392","type":"BoxAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48497"},"selection_policy":{"id":"48496"}},"id":"48456","type":"ColumnDataSource"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48468"},"group":null,"major_label_policy":{"id":"48469"},"ticker":{"id":"48431"}},"id":"48346","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48462","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48456"},"glyph":{"id":"48457"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48459"},"nonselection_glyph":{"id":"48458"},"view":{"id":"48461"}},"id":"48460","type":"GlyphRenderer"},{"attributes":{"toolbars":[{"id":"48360"},{"id":"48394"}],"tools":[{"id":"48350"},{"id":"48351"},{"id":"48352"},{"id":"48353"},{"id":"48354"},{"id":"48355"},{"id":"48356"},{"id":"48357"},{"id":"48384"},{"id":"48385"},{"id":"48386"},{"id":"48387"},{"id":"48388"},{"id":"48389"},{"id":"48390"},{"id":"48391"}]},"id":"48502","type":"ProxyToolbar"},{"attributes":{},"id":"48356","type":"SaveTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48458","type":"VBar"},{"attributes":{},"id":"48353","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48393","type":"PolyAnnotation"},{"attributes":{"tools":[{"id":"48350"},{"id":"48351"},{"id":"48352"},{"id":"48353"},{"id":"48354"},{"id":"48355"},{"id":"48356"},{"id":"48357"}]},"id":"48360","type":"Toolbar"},{"attributes":{},"id":"48389","type":"UndoTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48358","type":"BoxAnnotation"}],"root_ids":["48504"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"00d69373-17c5-4a43-8dcf-2148127dad5c","root_ids":["48504"],"roots":{"48504":"8dbcc39c-7576-4e9c-bf97-13236df41378"}}];
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