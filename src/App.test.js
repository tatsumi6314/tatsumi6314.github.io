import { render, screen } from "@testing-library/react";
import App from "./App";

test("プロフィールの名前が表示される", () => {
  render(<App />);
  expect(screen.getByText("Tatsumi Oikawa")).toBeInTheDocument();
  expect(screen.getByText("翁川 竜海")).toBeInTheDocument();
});

test("プロジェクトのカテゴリが表示される", () => {
  render(<App />);
  expect(screen.getByText("Web Projects")).toBeInTheDocument();
  expect(screen.getByText("Mobile Projects")).toBeInTheDocument();
});

test("SNSアカウントへのリンクが表示される", () => {
  render(<App />);
  expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
  expect(screen.getByLabelText("Qiita")).toBeInTheDocument();
});
