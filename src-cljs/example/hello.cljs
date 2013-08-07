(ns example.hello
	(:require [clojure.string :as string]
            [goog.Timer :as timer]
            [goog.events :as events]
            [goog.events.EventType :as event-type]
            [goog.net.Jsonp :as jsonp]
            [goog.fx.dom.FadeInAndShow :as fade-in]
			      [goog.dom :as dom]))

(defn html
  "Create a dom element from an html string."
  [s]
  (dom/htmlToDocumentFragment s))
  
(defn get-element
  "Return the element with the passed id."
  [id]
  (dom/getElement (name id)))
 
(defn append
  "Append all children to parent."
  [parent & children]
  (do (doseq [child children]
        (dom/appendChild parent child))
      parent))
      
;; (dom/appendChild (dom/getElement "email") (dom/createDom "div" "dsa" "apa"))
;; (dom/appendChild parent child)

;;(js/alert "Hello from ClojureScript!")

;; (dom/getElement "body")

;; (.log js/console (dom/getElement "email"))
;; (.log js/console (goog.dom/createDom "div" (js-obj "style" "background-color:#EEE") (:title note)))
               
(.log js/console (goog.dom/createDom "h1" (js-obj "style" "background-color:#EEE") (str "dsa")))

(defn createOutput [text]
  (goog.dom/createDom "div" (js-obj "style" "background-color:#EEE") (str text)))

(defn createHeader [text]
	(goog.dom/createDom "h1" (js-obj "style" "background-color:#EEE") (str text)))

(defn createHeader2 [text]
  (goog.dom/createDom "h2" (js-obj "style" "background-color:#EEE") (str text)))

(defn createAhref [url text]
  (goog.dom/createDom "a" (js-obj "href" url) text))

(dom/appendChild (dom/getElement "email") (createHeader "Johan"))

(defn renderItem 
  [text link imghtml]
  (dom/appendChild (dom/getElement "email")
  (createHeader2 text))
  (dom/appendChild (dom/getElement "email") 
  (createAhref link "Link"))
  (dom/appendChild (dom/getElement "email")
  (dom/htmlToDocumentFragment imghtml)))

(defn dosomething
  []
  (dom/appendChild (dom/getElement "email") (createOutput (js/Date))))

;; Timer
; Append some text to div
(defn starttimer 
  []
  (let [timer (goog.Timer. 5000)]
  (do (. timer (start))
    (events/listen timer goog.Timer/TICK dosomething))))

; (starttimer)

(defn do-track-button-clicked
  "Handle button click events"
  []
  (.log js/console "Button clicked"))

;; Events
(defn init-event-handlers
  []
  (events/listen (dom/getElement "search-button") "click" do-track-button-clicked))

; Init app
(init-event-handlers)

; JSON
(def tumblr-url "http://pipes.yahoo.com/pipes/pipe.run?_id=NKGOK8p83BGEJGdHjknRlg&_render=json")

(defn retrieve-tumblr 
  [callback error-callback]
  (.send (goog.net.Jsonp. tumblr-url "_callback")
  "" callback error-callback))

(defn display-count 
  [json-obj]
  (let [data (js->clj json-obj :keywordize-keys true)
  post-count (:count data)]
  (js/alert (str "Number of posts: " post-count))))
 
(defn display-items 
  [json-obj]
  (let [data (js->clj json-obj :keywordize-keys true)
  items (:items (:value data))
  titles (map :title items)]
  (doseq [a (take 5 items)] (renderItem (:title a) (:link a) (:description a)))))

;; (retrieve-tumblr display-items #(js/alert (str "An error occurred: " %)))

;; (.log js/console (createAhref "http://www.google.com" "hejsan"))

;; (.play (goog.fx.dom.FadeInAndShow. (dom/getElement "email") 1500))

;; Function to create notification and fade in

(defn create-div-note
  [id content]
  (dom/appendChild
    (dom/getElement "email") 
    (goog.dom/createDom "div" (js-obj "style" "background-color:#EEE" "id" id) content)))

(defn create-notification
  [text]
  (let [gen-id (goog.math.randomInt 10000)]
  (create-div-note (str gen-id) (str text))
  (.play (goog.fx.dom.FadeInAndShow. (dom/getElement (str gen-id)) 1500))))

(defn dosomething
  []
  (create-notification (js/Date.)))

;; Timer
; Append some text to div
(defn starttimer 
  []
  (let [timer (goog.Timer. 5000)]
  (do (. timer (start))
    (events/listen timer goog.Timer/TICK dosomething))))

(starttimer)