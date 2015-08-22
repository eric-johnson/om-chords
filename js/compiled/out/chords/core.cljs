(ns ^:figwheel-always chords.core
    (:require[om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defonce app-state (atom {:radius 1, :chord-length 0.5, :offset 0}))

(defn diam-to-perim [radius offset]
  (.sqrt js/Math (- (.pow js/Math radius 2)
                    (.pow js/Math offset 2))))

(defn diam-to-chord [radius chord-length]
  (let [half-chord (/ chord-length 2)]
    (.sqrt js/Math (- (.pow js/Math radius 2)
                      (.pow js/Math half-chord 2)))))

(defn chord-to-perim [data]
  (let [radius (js/parseFloat (:radius data))
        chord-length (js/parseFloat (:chord-length data))
        offset (js/parseFloat (:offset data))]
    (- (diam-to-perim radius offset)
       (diam-to-chord radius chord-length))))

(defn numeric? [text]
  ;; https://github.com/jquery/jquery/blob/2.1.4/src/core.js#L217
  (>= (+ (- text
            (js/parseFloat text))
         1)
      0))

(defn handle-change [e data key]
  (let [old (key data)
        new (.. e -target -value)]
    (if (numeric? new)
      (om/transact! data key #(identity new)))))

(defn input-view [data owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil
               (dom/p nil
                      (dom/label #js {:htmlFor "radius"} "Radius")
                      (dom/input #js {:type "text" :ref "radius" :id "radius" :value (:radius data)
                                      :onChange #(handle-change % data :radius)}))
               (dom/p nil
                      (dom/label #js {:htmlFor "chord-length"} "Chord Length")
                      (dom/input #js {:type "text" :ref "chord-length" :id "chord-length" :value (:chord-length data)
                                      :onChange #(handle-change % data :chord-length)}))
               (dom/p nil
                      (dom/label #js {:htmlFor "offset"} "Offset from Center")
                      (dom/input #js {:type "text" :ref "offset" :id "offset" :value (:offset data)
                                      :onChange #(handle-change % data :offset)}))
               (dom/p nil
                      (dom/label #js {:htmlFor "chord-to-perim"} "Chord to Perimeter at offset")
                      (dom/input #js {:type "text" :ref "chord-to-perim" :id "chord-to-perim"
                                      :value (chord-to-perim data) :disabled true}))))))

(om/root
  input-view
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

