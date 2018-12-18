docker build . --tag eu.gcr.io/algebraic-envoy-218317/us_server

docker push eu.gcr.io/algebraic-envoy-218317/us_server

kubectl apply -f ./k8s/deployment.us.yaml
kubectl apply -f ./k8s/service.us.yaml