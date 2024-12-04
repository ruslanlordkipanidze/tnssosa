import styled from 'styled-components';
import { WalletIcon } from './icons/WalletIcon';
import { TonConnectButton } from '@tonconnect/ui-react';

const WalletButtonWrapper = styled.div`
  .ton-connect-button {
    background: transparent !important;
    color: #646cff !important;
    padding: 0.8em 1.5em !important;
    border-radius: 8px !important;
    border: 1px solid #646cff !important;
    cursor: pointer !important;
    font-size: 1em !important;
    transition: all 0.3s ease !important;
    white-space: nowrap !important;

    &:hover {
      background: rgba(100, 108, 255, 0.1) !important;
    }

    @media (max-width: 768px) {
      padding: 0.6em !important;
      border-radius: 50% !important;
      width: 40px !important;
      height: 40px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      span {
        display: none !important;
      }

      .ton-connect-button__icon {
        margin: 0 !important;
      }
    }
  }
`;

const ConnectWallet = () => {
  return (
    <WalletButtonWrapper>
      <TonConnectButton />
    </WalletButtonWrapper>
  );
};

export default ConnectWallet; 