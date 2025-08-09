// jest.setup.js
import React from "react";
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

global.React = React;
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;
