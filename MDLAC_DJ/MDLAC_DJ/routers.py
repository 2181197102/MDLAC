class MyDBRouter:
    """
    一个数据库路由器，用于将不同的应用程序分配到不同的数据库。
    """

    def db_for_read(self, model, **hints):
        """
        将读取操作路由到适当的数据库。
        """
        if model._meta.app_label == 'shows':
            return 'shows_db'  # 显示应用的数据读取操作使用 shows_db
        elif model._meta.app_label == 'login':
            return 'login_db'  # 认证应用的数据读取操作使用 auth_db
        return 'default'  # 其他操作使用默认数据库

    def db_for_write(self, model, **hints):
        """
        将写入操作路由到适当的数据库。
        """
        if model._meta.app_label == 'shows':
            return 'shows_db'  # 显示应用的数据写入操作使用 shows_db
        elif model._meta.app_label == 'login':
            return 'login_db'  # 认证应用的数据写入操作使用 auth_db
        return 'default'  # 其他操作使用默认数据库

    def allow_relation(self, obj1, obj2, **hints):
        """
        如果一个模型的实例涉及显示应用或认证应用，允许它们之间的关系。
        """
        if obj1._meta.app_label == 'shows' or obj2._meta.app_label == 'shows':
            return True
        if obj1._meta.app_label == 'login' or obj2._meta.app_label == 'login':
            return True
        return None  # 其他情况不允许关系

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        确保显示应用只出现在 shows_db 数据库中，认证应用只出现在 auth_db 数据库中。
        """
        if app_label == 'shows':
            return db == 'shows_db'
        elif app_label == 'login':
            return db == 'login_db'
        return db == 'default'
