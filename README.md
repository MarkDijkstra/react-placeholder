# react-placeholder

![npm](https://img.shields.io/npm/v/@markdijkstra/react-placeholder)
![NPM](https://img.shields.io/npm/l/@markdijkstra/react-placeholder)
![GitHub issues](https://img.shields.io/github/issues/MarkDijkstra/react-placeholder)
![CircleCI](https://img.shields.io/circleci/build/github/MarkDijkstra/react-placeholder)

React placeholder component which allows you to create dummy boxes.

### How install


```npm
npm i @markdijkstra/react-placeholder
```

### How to use


```jsx
import {Placeholder} from '@markdijkstra/react-placeholder'


const PlaceholderData = [
    {
        height          : '150px',
        width           : '300px',
        backgroundColor : '#eee',
        borderColor     : '#ccc',
        textColor       : '#aaa',
        fontSize        : '13px',
        caption         : 'placeholder caption'
    }
];

<Placeholder options={PlaceholderData} className="my-placeholder"/>

```

### Options

| option          | default        |
| --------------- | -------------- |
| height          | 150px          |
| width           | 300px          |
| backgroundColor | #eee           |
| borderColor     | #ccc           |
| textColor       | #aaa           |
| fontSize        | 13px           |
| caption         | height x width |



The value caption can be removed by setting it to 'false'.
