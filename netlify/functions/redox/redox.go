package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	Rdx "github.com/Tyuzu/pog/internal/rdx"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
	Rdx.InitRedis()
	Rdx.RdxSet("hola","amigos")
	hola, _ := Rdx.RdxGet("hola")
  return &events.APIGatewayProxyResponse{
    StatusCode:        200,
    Body:              hola,
  }, nil
}

func main() {
  lambda.Start(handler)
}
