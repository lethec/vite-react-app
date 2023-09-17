import { Layout } from "antd";
import styles from "./index.module.less";
import ProContent from "./proContent";
import ProHeader from "./proHeader";

const { Header, Sider, Content } = Layout;
const ProLayout = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <ProHeader />
      </Header>
      <Layout hasSider>
        <Sider className={styles.sider}>Sider</Sider>
        <Content className={styles.content}>
          <div className="w-full h-full pr-4 pb-4">
            <div className="bg-silver w-full h-full p-4">
              <div className="bg-white w-full h-full rounded-lg p-4">
                <ProContent />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProLayout;
