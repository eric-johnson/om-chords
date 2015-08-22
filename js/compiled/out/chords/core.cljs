(ns ^:figwheel-always chords.core
    (:require[om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defonce app-state (atom {}))

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

(defn handle-change [e state owner key]
  (let [old (key state)
        new (.. e -target -value)]
    (if (numeric? new)
      (om/set-state! owner key new)
      (om/set-state! owner key old))))

(defn input
  ([state owner key label] (input state owner key label {}))
  ([state owner key label params]
   (dom/p nil
          (dom/label #js {:htmlFor key} label)
          (dom/input (clj->js (merge {:type "text" :ref key :id key :value (key state)
                                      :onChange #(handle-change % state owner key)}
                                     params))))))

(defn app-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:radius 1
       :chord-length 0.5
       :offset 0})
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
               (input state owner :radius "Radius")
               (input state owner :chord-length "Chord Length")
               (input state owner :offset "Offset from Center")
               (input state owner :chord-to-perim "Chord to Perimeter at Offset"
                      {:disabled true, :value (chord-to-perim state)})))))

(om/root
  app-view
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

