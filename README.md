## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :groups, :name|
|user_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups_users
- has_many  :users, through:  :groups_users
- has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, add_index :users, :name|
|email|string|null: false, add_index :users, :email, unique: true|
|password|string|null: false|

### Association
- has_many :groups_users
- has_many  :groups, through:  :groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
