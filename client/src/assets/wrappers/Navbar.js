import styled from "styled-components";

const Wrapper = styled.nav`
    .navbar {
        background-color: #F2CC8F;
        box-shadow: var(--shadow-1);
        transition: 0.3s ease-in-out all;
    }
    .navbar:hover {
        box-shadow: var(--shadow-2);
    }
    .nav-links {
        flex-grow: 1;
        justify-content: space-evenly;
        font-weight: 600;
        font-size: larger;
    }
    .navLinks {
        justify-content: center;
    }
    .buttons {
        flex-grow: 0;
    }
    .nav-link {
        text-transform: capitalize;
        width: 150px;
    }
    .icon {
        margin-right: 0.4rem;
        position: relative;
        bottom: 2px;
      }
    span {
        font-weight: 400;
        font-size: larger;
        padding-left: 0.6rem;
    }
    .dropdownButton .orangeButton {
        padding: 0.2rem 0;
        width: 10rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .logoutButton {
        display: none !important;
        padding: 8px 12px;
    }
      @media (max-width: 991px) {
        .dropdownButton {
            display: none;
        }
        .logoutButton {
            display: flex !important;
            justify-content: center;
        }
        .logoutButton .btn {
            min-width: 8rem;
        }
        .collapse:not(.show) {
            display: none !important;
        }
        .nav-link {
            width: 128px;
        }
      }
      @media (max-width: 428px) {
        .nav-link {
            width: fit-content;
        }
      }
`;
export default Wrapper;
