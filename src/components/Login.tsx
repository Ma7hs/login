import Card from "./Card";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Card subtitle="Bem-vindo de volta!" title="Login" />
        </div>
      </div>
    </>
  );
}
