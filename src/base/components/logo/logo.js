import './logo.styl';
import logotypeImageUrl from '@src/base/images/logo.svg';

export const Logo = () => {
  return (
    <div className="k-logo">
      <img src={logotypeImageUrl} alt="Kobbogo Logotype" />
    </div>
  );
};
