import styled from 'styled-components';

const StyledLoader = styled.div`
  width: 180px;
  height: 180px;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 50%;
  margin-left: -90px;
  margin-top: -110px;
  border-radius: 20px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  text-align: center;
  background: #f2f4f8
    url(https://icons8.com/preloaders/generator.php?filmstrip&image=91&speed=9&fore_color=000000&back_color=FFFFFF&size=64x64&transparency=1&reverse=0&orig_colors=0&gray_transp=1&image_type=2&inverse=0&flip=0&frames_amount=20&word=237-261-157-41-266-237-41-257-237-266-57-41-227-41-36-36-36)
    no-repeat center center;
`;

export default StyledLoader;
