(ns example.views
  (:require
    [hiccup
      [page :refer [html5]]
      [page :refer [include-js]]]))

(defn index-page []
  (html5
    [:head
      [:title "Clojure/ClojureScript Example"]]
    [:body
      [:h1 "Hello World"]
      [:button {:id "search-button"} "search"]
      [:div {:id "email" :class "selected starred"} ""]]

      (include-js "/js/main.js")))
