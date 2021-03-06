import { APIGatewayEvent } from 'aws-lambda';

const event: APIGatewayEvent = {
    'resource': '/hello',
    'path': '/hello',
    'httpMethod': 'GET',
    'headers': {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'CloudFront-Forwarded-Proto': 'https',
        'CloudFront-Is-Desktop-Viewer': 'true',
        'CloudFront-Is-Mobile-Viewer': 'false',
        'CloudFront-Is-SmartTV-Viewer': 'false',
        'CloudFront-Is-Tablet-Viewer': 'false',
        'CloudFront-Viewer-Country': 'US',
        'dnt': '1',
        'Host': '7s8xxekll9.execute-api.us-east-1.amazonaws.com',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
        'Via': '2.0 7b6b24479d403ba8e499b225c726a688.cloudfront.net (CloudFront)',
        'X-Amz-Cf-Id': 'Hk3-ghJb6StHHarGVTbogiMSr1u8fajT4TWg0qrk3ZiKo4sFArKxMA==',
        'X-Amzn-Trace-Id': 'Root=1-5e73d4bb-baa7c0fee1737e26edb8209e',
        'X-Forwarded-For': '157.245.90.67, 70.132.13.87',
        'X-Forwarded-Port': '443',
        'X-Forwarded-Proto': 'https'
    },
    'multiValueHeaders': {
        'Accept': [
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
        ],
        'Accept-Encoding': [
            'gzip, deflate, br'
        ],
        'Accept-Language': [
            'en-US,en;q=0.9'
        ],
        'CloudFront-Forwarded-Proto': [
            'https'
        ],
        'CloudFront-Is-Desktop-Viewer': [
            'true'
        ],
        'CloudFront-Is-Mobile-Viewer': [
            'false'
        ],
        'CloudFront-Is-SmartTV-Viewer': [
            'false'
        ],
        'CloudFront-Is-Tablet-Viewer': [
            'false'
        ],
        'CloudFront-Viewer-Country': [
            'US'
        ],
        'dnt': [
            '1'
        ],
        'Host': [
            '7s8xxekll9.execute-api.us-east-1.amazonaws.com'
        ],
        'sec-fetch-dest': [
            'document'
        ],
        'sec-fetch-mode': [
            'navigate'
        ],
        'sec-fetch-site': [
            'none'
        ],
        'sec-fetch-user': [
            '?1'
        ],
        'upgrade-insecure-requests': [
            '1'
        ],
        'User-Agent': [
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36'
        ],
        'Via': [
            '2.0 7b6b24479d403ba8e499b225c726a688.cloudfront.net (CloudFront)'
        ],
        'X-Amz-Cf-Id': [
            'Hk3-ghJb6StHHarGVTbogiMSr1u8fajT4TWg0qrk3ZiKo4sFArKxMA=='
        ],
        'X-Amzn-Trace-Id': [
            'Root=1-5e73d4bb-baa7c0fee1737e26edb8209e'
        ],
        'X-Forwarded-For': [
            '157.245.90.67, 70.132.13.87'
        ],
        'X-Forwarded-Port': [
            '443'
        ],
        'X-Forwarded-Proto': [
            'https'
        ]
    },
    'queryStringParameters': null,
    'multiValueQueryStringParameters': null,
    'pathParameters': null,
    'stageVariables': null,
    'requestContext': {
        'authorizer': {},
        'resourceId': '65udh1',
        'resourcePath': '/hello',
        'httpMethod': 'GET',
        'extendedRequestId': 'Jp4tRHtMIAMFnDQ=',
        'requestTime': '19/Mar/2020:20:23:23 +0000',
        'path': '/prod/hello',
        'accountId': '629865279428',
        'protocol': 'HTTP/1.1',
        'stage': 'prod',
        'domainPrefix': '7s8xxekll9',
        'requestTimeEpoch': 1584649403239,
        'requestId': '564d4c75-caa5-4b77-b36d-5376e3e75cc0',
        'identity': {
            'cognitoIdentityPoolId': null,
            'accountId': null,
            'cognitoIdentityId': null,
            'caller': null,
            'sourceIp': '157.245.90.67',
            'principalOrgId': null,
            'accessKey': null,
            'cognitoAuthenticationType': null,
            'cognitoAuthenticationProvider': null,
            'userArn': null,
            'userAgent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36',
            'user': null,
            'apiKey': '',
            apiKeyId: ''
        },
        'domainName': '7s8xxekll9.execute-api.us-east-1.amazonaws.com',
        'apiId': '7s8xxekll9'
    },
    'body': null,
    'isBase64Encoded': false
};

export default event;
