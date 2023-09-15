import { Layout } from "antd";
import styles from "./app.module.less";

const { Header, Sider, Content } = Layout;
const App = () => {
  return (
    <div>
      <Layout>
        <Header className={styles.header}>Hearder</Header>
        <Layout hasSider>
          <Sider className={styles.sider}>Sider</Sider>
          <Content className={styles.content}>
            <div className="w-full h-full pr-4 pb-4">
              <div className="bg-silver w-full h-full p-4">
                <div className="bg-white w-full h-full rounded-lg p-4">
                  content
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
