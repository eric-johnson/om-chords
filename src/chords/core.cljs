(ns ^:figwheel-always chords.core
    (:require[om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defonce app-state (atom {:radius 1, :chord-length 0.5}))

(defn numeric? [text]
  ;; https://github.com/jquery/jquery/blob/2.1.4/src/core.js#L217
  (>= (+ (- text
            (js/parseFloat text))
         1)
      0))

(defn handle-change [e owner state key]
  (let [old (key state)
        new (.. e -target -value)]
    (if (numeric? new)
      (om/set-state! owner key new)
      (om/set-state! owner key old))))

(defn input-view [data owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (dom/div nil
               (dom/p nil
                      (dom/label #js {:htmlFor "radius"} "Radius")
                      (dom/input #js {:type "text" :ref "radius" :id "radius" :value (:radius state)
                                      :onChange #(handle-change % owner state :radius)}))
               (dom/p nil
                      (dom/label #js {:htmlFor "chord-length"} "Chord Length")
                      (dom/input #js {:type "text" :ref "chord-length" :id "chord-length" :value (:chord-length state)
                                      :onChange #(handle-change % owner state :chord-length)}))))))

(om/root
  input-view
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

