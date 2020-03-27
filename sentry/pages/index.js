import React, { Component } from 'react';
import Blog from '../Blog'
import Head from "next/head";

//
//
// class ExampleBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { error: null };
//     }
//
//     componentDidCatch(error, errorInfo) {
//         Sentry.withScope(scope => {
//             Object.keys(errorInfo).forEach(key => {
//                 scope.setExtra(key, errorInfo[key]);
//             });
//
//             Sentry.captureException(error);
//         });
//
//         super.componentDidCatch(error, errorInfo);
//     }
//
//     run = () => {
//       throw new Error("Error return by typescript");
//     };
//
//     render() {
//         // @ts-ignore
//         if (this.state.error) {
//             //render fallback UI
//             return (
//                 <button onClick={() => Sentry.showReportDialog({})}>Report feedback</button>
//             );
//         }
//
//         //when there's not an error, render children untouched
//         return <>
//                <Head>
//                    <title>Create Next App</title>
//                     <link rel="icon" href="/favicon.ico"/>
//                 </Head>
//                 <main>
//                         <div>Home Page</div>
//                         <Blog  run={this.run}/>
//                 </main>
//             </>
//     }
// }
//
// export default ExampleBoundary








import * as Sentry from '@sentry/browser';
import Raven from 'raven-js'

Sentry.init(
     {dsn: "https://2ebc5e5c0fe44a4bb41115f20b226580@sentry.io/5175796",
             release: "%REACT_APP_RELEASE_VERSION%"
             }
     );

Raven.config("https://2ebc5e5c0fe44a4bb41115f20b226580@sentry.io/5175796").install();

const Home = () => {

    const run = () => {
        console.log('run');
       throw new Error("Error throw");
    };

   return <div className="container">
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main>
            <div>Home Page</div>
            <Blog run={run}/>
        </main>
    </div>
};

export default Home

