package main

import (
	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/Tyuzu/pog/internal/cookies"
)

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {
  return &events.APIGatewayProxyResponse{
    StatusCode:        200,
    Body:              cookies.Cook(),
  }, nil
}

func main() {
  lambda.Start(handler)
}