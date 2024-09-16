# Vite 프로젝트 with React, OpenWeatherMap, Three.js

이 프로젝트는 **Vite**와 **React**를 사용하여 고성능 웹 애플리케이션을 구축했습니다. **OpenWeatherMap** API를 통해 실시간 날씨 데이터를 통합하고, **Three.js**를 사용하여 3D 인터페이스를 구현하여 사용자가 다양한 도시의 날씨 정보를 확인할 수 있습니다.

## 주요 기능

- **실시간 날씨 데이터**: OpenWeatherMap API를 사용하여 다양한 도시의 실시간 날씨 정보를 제공합니다.
- **인터랙티브 3D 요소**: Three.js와 React Three Fiber를 사용하여 3D 모델과 애니메이션을 렌더링합니다.
- **Framer Motion 애니메이션**: Framer Motion을 사용하여 부드럽고 직관적인 애니메이션 효과를 제공합니다.
- **다양한 도시 정보 제공**: React Router를 사용하여 도시별로 날씨 정보를 동적으로 확인할 수 있습니다.

## 기술 스택

- **React**: UI 컴포넌트 기반의 JavaScript 라이브러리.
- **Vite**: 빠른 빌드 속도를 제공하는 차세대 프론트엔드 빌드 도구.
- **React Router**: SPA 내에서 라우팅 기능을 제공합니다.
- **React Three Fiber**: Three.js를 React 환경에서 사용할 수 있게 해주는 라이브러리.
- **Framer Motion**: 부드러운 애니메이션을 제공하는 모션 라이브러리.
- **OpenWeatherMap API**: 실시간 날씨 정보를 제공하는 API.
- **Three.js**: 3D 모델링 및 렌더링을 위한 JavaScript 라이브러리.
- **ESLint**: 코드 품질 유지를 위한 린팅 도구.

## 설치 및 실행

1. 프로젝트 클론:
   ```bash
   git clone https://github.com/your-repo/vite-project.git
   cd vite-project
2. 설치
   ```bash
   npm install
3. 개발 서버 실행
   ```bash
   npm run dev

## 주요 의존성
  ```bash
  "dependencies": {
    "@react-three/drei": "^9.112.0",
    "@react-three/fiber": "^8.17.7",
    "framer-motion": "^11.5.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2",
    "three": "^0.157.0",
    "xlsx": "^0.18.5"
  }
```

## 추후 추가 기능
1. 검색 기능
2. 현재 하드 코딩으로 5개의 데이터만 로드중 엑셀로 국가 정보 정리후 엑셀파일 정보를 가지고 정보 추출
   
