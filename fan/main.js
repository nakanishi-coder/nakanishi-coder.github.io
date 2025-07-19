// ...existing code...
// main.js
// ESモジュールとしてthree.js, fan_model.js, examplesをimportし、アプリ全体を管理

import * as THREE from './libs/three.module.js';
import { OrbitControls } from './libs/OrbitControls.js';
import { STLExporter } from './libs/STLExporter.js';
import { FontLoader } from './libs/FontLoader.js';
import { TextGeometry } from './libs/TextGeometry.js';
import { createFanBladeGeometry, createFanBlades, createBoss, generateFan } from './fan_model.js';

// ...existing code...
