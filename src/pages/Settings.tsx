
import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import SettingsContent from '../components/settings/SettingsContent';
import { toast } from 'sonner';

const Settings = () => {
  useEffect(() => {
    // Show a welcome toast when the page loads
    toast.success("Settings loaded", {
      description: "Manage your account settings"
    });
  }, []);

  return (
    <Layout>
      <SettingsContent />
    </Layout>
  );
};

export default Settings;
