import { render } from '@src/base/services/testing/testing';
import usersResource from '@src/user/resources/users/users';
import { UserForm } from './user-form';

describe('User Form', () => {
  function mount(){
    return render(<UserForm />);
  }

  beforeEach(() => {
    usersResource.save = jest.fn(() => Promise.resolve())
  })

  it('should not save user if no username has been given', async () => {
    const { user, getByLabelText, getByText } = mount();
    await fillPassword(user, getByLabelText, '123456');
    await user.click(getByText(getSubmitButtonLabel()));
    expect(getByText(getRequiredErrorMessage())).toBeInTheDocument();
    expect(usersResource.save).not.toHaveBeenCalled();
  });

  it('should not save user if username has less than 2 characters', async () => {
    const { user, getByLabelText, getByText } = mount();
    await fillUsername(user, getByLabelText, 'c');
    await user.click(getByText(getSubmitButtonLabel()));
    expect(getByText('Enter more than one character')).toBeInTheDocument();
    expect(usersResource.save).not.toHaveBeenCalled();
  });

  it('should not save user if username has a space character', async () => {
    const { user, getByLabelText, getByText } = mount();
    await fillUsername(user, getByLabelText, 'r camargo');
    await user.click(getByText(getSubmitButtonLabel()));
    expect(getByText(getInvalidCharsErrorMessage())).toBeInTheDocument();
    expect(usersResource.save).not.toHaveBeenCalled();
  });

  it('should not save user if username has characters others than letters and numbers', async () => {
    const { user, getByLabelText, getByText } = mount();
    await fillUsername(user, getByLabelText, 'c@margo');
    await user.click(getByText(getSubmitButtonLabel()));
    expect(getByText(getInvalidCharsErrorMessage())).toBeInTheDocument();
    expect(usersResource.save).not.toHaveBeenCalled();
  });

  it('should not save user if no password has been given', async () => {
    const { user, getByLabelText, getByText } = mount();
    await fillUsername(user, getByLabelText, 'camargo');
    await user.click(getByText(getSubmitButtonLabel()));
    expect(getByText(getRequiredErrorMessage())).toBeInTheDocument();
    expect(usersResource.save).not.toHaveBeenCalled();
  });

  it('should not save user if password has less than 6 characters', async () => {
    const { user, getByLabelText, getByText } = mount();
    await fillPassword(user, getByLabelText, '12345');
    await user.click(getByText(getSubmitButtonLabel()));
    expect(getByText('Must contain at least 6 characters')).toBeInTheDocument();
    expect(usersResource.save).not.toHaveBeenCalled();
  });

  it('should show success message on save success', async () => {
    const username = 'camargo';
    const password = '123456';
    const { user, getByLabelText, getByText } = mount();
    await fillUsername(user, getByLabelText, username);
    await fillPassword(user, getByLabelText, password);
    await user.click(getByText(getSubmitButtonLabel()));
    expect(usersResource.save).toHaveBeenCalledWith({ username, password });
    expect(getByText('Welcome!')).toBeInTheDocument();
    expect(getByText("You're now part of Kobbogó")).toBeInTheDocument();
  });

  it('should show error message on save error', async () => {
    usersResource.save = jest.fn(() => Promise.reject())
    const username = 'camargo';
    const password = '123456';
    const { user, getByLabelText, getByText } = mount();
    await fillUsername(user, getByLabelText, username);
    await fillPassword(user, getByLabelText, password);
    await user.click(getByText(getSubmitButtonLabel()));
    expect(getByText('Ops, something went wrong.')).toBeInTheDocument();
  });
});

function getSubmitButtonLabel(){
  return 'Create my user';
}

function getRequiredErrorMessage(){
  return 'Required';
}

function getInvalidCharsErrorMessage(){
  return 'Enter letters and numbers only';
}

async function fillUsername(user, getByLabelText, value){
  await user.type(getByLabelText('Username'), value);
}

async function fillPassword(user, getByLabelText, value){
  await user.type(getByLabelText('Password'), value);
}
