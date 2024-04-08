#!/bin/sh

echo "Starting RabbitMQ server..."
rabbitmq-server &

# Wait for RabbitMQ server to start
sleep 10

echo "Adding user 'testuser'..."
rabbitmqctl add_user testuser "testuser"

echo "Setting permissions for 'testuser'..."
rabbitmqctl set_permissions -p / testuser ".*" ".*" ".*"

echo "Setting tags for 'testuser'..."
rabbitmqctl set_user_tags testuser administrator

echo "Remove default user guest"
rabbitmqctl delete_user guest

echo "Setup complete. Waiting for container to exit..."

tail -f /dev/null
