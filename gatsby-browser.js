import React from 'react';
import "./src/styles/globals.css";
import Layout from './src/components/layout';

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}