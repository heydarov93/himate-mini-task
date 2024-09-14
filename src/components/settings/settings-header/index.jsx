import SettingsTabs from "./SettingsTabs";

function SettingsHeader() {
  return (
    <header className="mb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold leading-[38px]">Settings</h1>
      </div>
      <SettingsTabs />
    </header>
  );
}

export default SettingsHeader;
