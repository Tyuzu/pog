package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	rdx "github.com/Tyuzu/pog/internal/rdx"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	rdx.RdxSet("hola","amigos")
	hola := rdx.RdxGet("hola")
  return &events.APIGatewayProxyResponse{
    StatusCode:        200,
    Body:              hola,
  }, nil
}

func main() {
  lambda.Start(handler)
}
