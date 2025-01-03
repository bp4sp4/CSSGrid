## 24/01/03 CSS grid 연습

<h2>24/01/03</h2>

- css grid 연습
- 이미지추가
- 아직 어렵다 많이 써봐야 감을 잡을거 같다.

- 고도화 목표
  - 이미지 클릭시 팝업창열림
  - 다운로드 가능하게 만듬

```
// 기본 템플릿
 grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
 auto-fill: 여유 공간이 있으면 빈 열을 채우고, 콘텐츠 크기에 맞춰 열이 추가됩니다.
 auto-fit: 여유 공간이 있으면 빈 열을 없애고, 나머지 열이 최대한 공간을 차지합니다.
 auto: 그리드 아이템에 맞춰 열의 크기가 자동으로 조정됩니다.
 minmax(): 열이나 행의 크기를 최소와 최대 값으로 지정하여, 아이템의 크기를 그 범위 내에서 조정합니다.

 grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
 grid-column: span 2;  아이템은 2개의 열을 차지 */
 grid-row: 1 / 3; /* 1번째 행에서 시작해서 3번째 행까지 차지 */
 grid-row: span 2; /* 2개의 행을 차지 */

```
