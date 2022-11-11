import styled from "styled-components";
import config from "../../../config.json";

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  /* background-image: url(${config.banner}); */
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
  width: 100%;
`;

export function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.banner} />
      <section className="user-info">
        <img src={config.avatarUrl} alt="perfil" />
        <div>
          <h1>{config.name}</h1>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
